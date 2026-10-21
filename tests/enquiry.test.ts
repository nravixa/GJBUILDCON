/**
 * Automated Verification Suite for Enquiry Endpoint & Validation Engine
 *
 * Runs on Node 24 native test runner (node:test) with zero external test dependencies.
 * Validates all 10 minimum test scenarios mandated by Phase 3B-2.
 */

import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { validateEnquiryPayload } from "../lib/enquiryValidation";
import { buildEnquiryEmailContent, sendEnquiryEmail } from "../lib/emailService";
import { checkRateLimit, resetRateLimits } from "../lib/rateLimit";
import { POST } from "../app/api/enquiry/route";

describe("Enquiry Engine - Factual & Validation Quality Gates", () => {
  beforeEach(() => {
    resetRateLimits();
  });

  // 1. Valid request validation & provider formatting
  it("Scenario 1: Valid request normalizes fields and builds sanitized email content", () => {
    const rawPayload = {
      name: "  Umesh Sharma  \r\n",
      phone: "+91 98765-43210",
      email: "  UMESH@GMAIL.COM  ",
      vertical: "Residential Civil Works",
      location: "  Pimple Saudagar / 150,000 sq ft ",
      message: "Soil profile comprises weathered basalt overlying hard Deccan rock.",
    };

    const result = validateEnquiryPayload(rawPayload);
    assert.equal(result.isValid, true);
    assert.ok(result.sanitizedData);
    assert.equal(result.sanitizedData.name, "Umesh Sharma");
    assert.equal(result.sanitizedData.phone, "+919876543210");
    assert.equal(result.sanitizedData.email, "umesh@gmail.com");
    assert.equal(result.sanitizedData.vertical, "Residential Civil Works");

    // Email content generation
    const email = buildEnquiryEmailContent(result.sanitizedData);
    assert.ok(email.subject.includes("Residential Civil Works"));
    assert.ok(email.subject.includes("Umesh Sharma"));
    assert.ok(email.text.includes("+919876543210"));
    assert.ok(email.html.includes("Umesh Sharma"));
    assert.ok(email.html.includes("Pimple Saudagar"));
  });

  // 1b. Mocked Provider Transport
  it("Scenario 1b: Valid request accepts transmission when mock provider responds OK", async () => {
    const mockEnquiry = {
      name: "Rajesh Patil",
      phone: "+919822012345",
      vertical: "Augur Rotary Piling",
    };

    // Mock fetch simulating 200 OK from https://api.resend.com/emails
    const mockFetch: typeof fetch = async () => {
      return new Response(JSON.stringify({ id: "mock_resend_email_id_123" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    };

    const delivery = await sendEnquiryEmail(mockEnquiry, {
      apiKey: "re_mock_test_key_12345",
      fetchFn: mockFetch,
    });

    assert.equal(delivery.success, true);
    assert.equal(delivery.id, "mock_resend_email_id_123");
  });

  // 2. Missing required field (name or phone)
  it("Scenario 2: Rejects payload missing required 'name' or 'phone'", async () => {
    // Missing name
    const resNoName = validateEnquiryPayload({
      phone: "+91 9876543210",
      vertical: "Residential Civil Works",
    });
    assert.equal(resNoName.isValid, false);
    assert.ok(resNoName.errors.name);

    // Missing phone
    const resNoPhone = validateEnquiryPayload({
      name: "Sunil Kadam",
      vertical: "Commercial Complex",
    });
    assert.equal(resNoPhone.isValid, false);
    assert.ok(resNoPhone.errors.phone);

    // API route response check
    const req = new Request("http://localhost:3000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", phone: "" }),
    });
    const response = await POST(req);
    assert.equal(response.status, 422);
    const body = await response.json();
    assert.equal(body.success, false);
    assert.ok(body.errors.name);
    assert.ok(body.errors.phone);
  });

  // 3. Invalid email syntax
  it("Scenario 3: Rejects payload with invalid email syntax", () => {
    const result = validateEnquiryPayload({
      name: "Rahul Verma",
      phone: "+91 9876543210",
      email: "not-an-email-address",
    });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.email);
    assert.match(result.errors.email, /valid email/i);
  });

  // 4. Invalid phone number syntax
  it("Scenario 4: Rejects payload with invalid phone numbers", () => {
    const invalidPhones = ["123", "abc1234567", "++91888", "12345678901234567890"];
    for (const phone of invalidPhones) {
      const res = validateEnquiryPayload({
        name: "Rahul Verma",
        phone,
      });
      assert.equal(res.isValid, false, `Expected ${phone} to be rejected`);
      assert.ok(res.errors.phone);
    }
  });

  // 5. Malformed JSON payload
  it("Scenario 5: Route returns 400 Bad Request on malformed JSON payload", async () => {
    const req = new Request("http://localhost:3000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{ this is invalid json payload ...",
    });
    const res = await POST(req);
    assert.equal(res.status, 400);
    const body = await res.json();
    assert.equal(body.success, false);
    assert.match(body.error, /malformed/i);
  });

  // 6. Oversized request body (> 32 KB)
  it("Scenario 6: Route returns 413 Payload Too Large for oversized requests", async () => {
    const req = new Request("http://localhost:3000/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "content-length": "45000",
      },
      body: JSON.stringify({ name: "A", phone: "123" }),
    });
    const res = await POST(req);
    assert.equal(res.status, 413);
    const body = await res.json();
    assert.equal(body.success, false);
    assert.match(body.error, /maximum allowable limit/i);
  });

  // 7. Honeypot-triggered spam request
  it("Scenario 7: Honeypot-filled request is silently absorbed without dispatching email", async () => {
    const spamPayload = {
      name: "Spam Bot 3000",
      phone: "+91 9999999999",
      fax_number: "https://spam-link.example.com", // Honeypot filled!
    };

    const validation = validateEnquiryPayload(spamPayload);
    assert.equal(validation.isSpam, true);
    assert.equal(validation.isValid, false);

    // API Route behavior
    const req = new Request("http://localhost:3000/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spamPayload),
    });
    const res = await POST(req);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.success, true);
  });

  // 8. Provider rejection
  it("Scenario 8: Reports honest 502 error when delivery provider rejects request", async () => {
    const mockEnquiry = {
      name: "Anand Deshmukh",
      phone: "+919822000000",
      vertical: "Tripod Piling",
    };

    // Mock fetch simulating 403 Forbidden from Resend
    const mockFetch: typeof fetch = async () => {
      return new Response(JSON.stringify({ name: "validation_error", message: "Domain not verified" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    };

    const delivery = await sendEnquiryEmail(mockEnquiry, {
      apiKey: "re_mock_test_key",
      fetchFn: mockFetch,
    });

    assert.equal(delivery.success, false);
    assert.equal(delivery.code, "PROVIDER_REJECTED");
  });

  // 9. Missing server configuration (RESEND_API_KEY unset)
  it("Scenario 9: Reports honest 503 error when RESEND_API_KEY is not configured", async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    try {
      const req = new Request("http://localhost:3000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Vikas Joshi",
          phone: "+91 98221 23456",
          vertical: "Commercial Complex",
        }),
      });

      const res = await POST(req);
      assert.equal(res.status, 503);
      const body = await res.json();
      assert.equal(body.success, false);
      assert.equal(body.code, "PROVIDER_NOT_CONFIGURED");
      assert.match(body.error, /unconfigured/i);
    } finally {
      if (originalKey) process.env.RESEND_API_KEY = originalKey;
    }
  });

  // 10. Rate limiting protection on rapid repeated submit attempts
  it("Scenario 10: Enforces rate limit on repeated submissions from same IP", () => {
    const testIp = "192.168.1.100";
    // Allowed 5 requests
    for (let i = 0; i < 5; i++) {
      const check = checkRateLimit(testIp, 5, 60000);
      assert.equal(check.isAllowed, true, `Attempt ${i + 1} should be allowed`);
    }

    // 6th request must be rejected
    const blockedCheck = checkRateLimit(testIp, 5, 60000);
    assert.equal(blockedCheck.isAllowed, false, "6th attempt must be rejected");
    assert.equal(blockedCheck.remaining, 0);
    assert.ok(blockedCheck.resetMs > 0);
  });
});
