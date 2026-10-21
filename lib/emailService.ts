/**
 * Email Formatting & Resend Delivery Transport
 *
 * Formats structured enquiry emails (Plain-Text + Sanitized HTML)
 * and dispatches them via the Resend REST API (https://api.resend.com/emails).
 * Zero extra third-party SDK dependencies required.
 */

import { SanitizedEnquiry } from "./enquiryValidation";
import { companyData } from "@/data/company";

export interface SendEmailResult {
  success: boolean;
  id?: string;
  code?: "PROVIDER_NOT_CONFIGURED" | "PROVIDER_REJECTED" | "PROVIDER_ERROR";
  error?: string;
}

export interface SendEmailOptions {
  apiKey?: string;
  toEmail?: string;
  fromEmail?: string;
  fetchFn?: typeof fetch;
}

/**
 * Escapes characters with HTML entities to protect email clients from injection.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Builds Plain-Text and HTML email bodies for the consultation notification.
 */
export function buildEnquiryEmailContent(enquiry: SanitizedEnquiry): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = `[Project Consultation] ${enquiry.vertical} — ${enquiry.name}`;

  const plainText = [
    `GJ BUILDCON // PROJECT CONSULTATION ENQUIRY`,
    `============================================`,
    ``,
    `CLIENT DETAILS:`,
    `- Full Name: ${enquiry.name}`,
    `- Phone / WhatsApp: ${enquiry.phone}`,
    `- Email Address: ${enquiry.email || "Not Provided"}`,
    ``,
    `SPECIFICATION PARAMETERS:`,
    `- Discipline of Interest: ${enquiry.vertical}`,
    `- Site Location / Scope: ${enquiry.location || "Not Provided"}`,
    ``,
    `PROJECT DETAILS / GEOTECHNICAL NOTES:`,
    enquiry.message ? enquiry.message : "None provided.",
    ``,
    `============================================`,
    `Submitted via GJ Buildcon Official Website (${new Date().toUTCString()})`,
    `Headquarters: ${companyData.address.locality}, ${companyData.address.city} ${companyData.address.pincode}`,
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5F0; margin: 0; padding: 24px; color: #191B1F;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #DCD7CD; padding: 32px;">
    
    <div style="border-bottom: 2px solid #9A4A32; padding-bottom: 16px; margin-bottom: 24px;">
      <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #9A4A32; letter-spacing: 1px; display: block; margin-bottom: 4px;">
        GJ BUILDCON · CONSULTATION TERMINAL
      </span>
      <h2 style="margin: 0; font-size: 22px; text-transform: uppercase; color: #191B1F; font-weight: 700;">
        New Project Specification Enquiry
      </h2>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 14px; text-transform: uppercase; color: #5A5E66; font-family: monospace; margin: 0 0 12px 0; border-bottom: 1px solid #ECE8E0; padding-bottom: 6px;">
        Client Contact Information
      </h3>
      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #5A5E66; width: 140px;"><strong>Full Name:</strong></td>
          <td style="padding: 6px 0; color: #191B1F;">${escapeHtml(enquiry.name)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #5A5E66;"><strong>Phone / WhatsApp:</strong></td>
          <td style="padding: 6px 0; color: #191B1F;"><a href="tel:${escapeHtml(enquiry.phone)}" style="color: #9A4A32; text-decoration: none;">${escapeHtml(enquiry.phone)}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #5A5E66;"><strong>Email Address:</strong></td>
          <td style="padding: 6px 0; color: #191B1F;">${enquiry.email ? `<a href="mailto:${escapeHtml(enquiry.email)}" style="color: #9A4A32; text-decoration: none;">${escapeHtml(enquiry.email)}</a>` : '<span style="color: #8A8F99;">Not Provided</span>'}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 14px; text-transform: uppercase; color: #5A5E66; font-family: monospace; margin: 0 0 12px 0; border-bottom: 1px solid #ECE8E0; padding-bottom: 6px;">
        Specification Parameters
      </h3>
      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #5A5E66; width: 140px;"><strong>Discipline:</strong></td>
          <td style="padding: 6px 0; color: #191B1F; font-weight: 600;">${escapeHtml(enquiry.vertical)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #5A5E66;"><strong>Site Location:</strong></td>
          <td style="padding: 6px 0; color: #191B1F;">${enquiry.location ? escapeHtml(enquiry.location) : '<span style="color: #8A8F99;">Not Provided</span>'}</td>
        </tr>
      </table>
    </div>

    <div style="margin-bottom: 28px;">
      <h3 style="font-size: 14px; text-transform: uppercase; color: #5A5E66; font-family: monospace; margin: 0 0 12px 0; border-bottom: 1px solid #ECE8E0; padding-bottom: 6px;">
        Project Details / Geotechnical Notes
      </h3>
      <div style="background-color: #F7F5F0; border: 1px solid #DCD7CD; padding: 14px; font-size: 13px; line-height: 1.6; color: #191B1F; white-space: pre-wrap;">
        ${enquiry.message ? escapeHtml(enquiry.message) : '<em style="color: #8A8F99;">No detailed notes provided.</em>'}
      </div>
    </div>

    <div style="border-top: 1px solid #DCD7CD; padding-top: 16px; font-family: monospace; font-size: 11px; color: #8A8F99; text-align: center;">
      Securely transmitted from GJ Buildcon Website · Pune, Maharashtra
    </div>

  </div>
</body>
</html>
  `.trim();

  return { subject, text: plainText, html };
}

/**
 * Transmits an enquiry email via Resend REST API.
 */
export async function sendEnquiryEmail(
  enquiry: SanitizedEnquiry,
  options?: SendEmailOptions
): Promise<SendEmailResult> {
  const apiKey = options?.apiKey ?? process.env.RESEND_API_KEY;
  const toEmail = options?.toEmail ?? process.env.ENQUIRY_TO_EMAIL ?? companyData.email;
  const fromEmail =
    options?.fromEmail ??
    process.env.ENQUIRY_FROM_EMAIL ??
    "GJ Buildcon Consultations <onboarding@resend.dev>";
  const fetcher = options?.fetchFn ?? fetch;

  if (!apiKey || apiKey.trim().length === 0) {
    return {
      success: false,
      code: "PROVIDER_NOT_CONFIGURED",
      error: "Enquiry delivery service is not configured on the server.",
    };
  }

  const { subject, text, html } = buildEnquiryEmailContent(enquiry);

  try {
    const payload: {
      from: string;
      to: string[];
      subject: string;
      text: string;
      html: string;
      reply_to?: string;
    } = {
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
      html,
    };

    if (enquiry.email) {
      payload.reply_to = enquiry.email;
    }

    const response = await fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000), // 10s timeout
    });

    if (!response.ok) {
      const errorJson = (await response.json().catch(() => ({}))) as {
        name?: string;
        message?: string;
      };
      // Log error status responsibly without logging sensitive personal data
      console.error(
        `[EmailService] Resend API rejected transmission. Status: ${response.status}, Error: ${
          errorJson.name || errorJson.message || "Unknown"
        }`
      );
      return {
        success: false,
        code: "PROVIDER_REJECTED",
        error: "Delivery provider rejected the transmission.",
      };
    }

    const data = (await response.json()) as { id?: string };
    return {
      success: true,
      id: data.id,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Network error";
    console.error(`[EmailService] Transmission failed: ${errorMessage}`);
    return {
      success: false,
      code: "PROVIDER_ERROR",
      error: "Network communication with delivery provider failed.",
    };
  }
}
