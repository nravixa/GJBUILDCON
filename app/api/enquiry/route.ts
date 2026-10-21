import { NextResponse } from "next/server";
import { validateEnquiryPayload } from "@/lib/enquiryValidation";
import { sendEnquiryEmail } from "@/lib/emailService";
import { checkRateLimit } from "@/lib/rateLimit";

// Maximum allowable request body size: 32 KB
const MAX_BODY_BYTES = 32 * 1024;

export async function POST(request: Request) {
  // 1. Request Body Size Guard
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      {
        success: false,
        error: "Request payload exceeds the maximum allowable limit (32 KB).",
      },
      { status: 413 }
    );
  }

  // 2. Parse JSON Payload
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Malformed or invalid JSON payload.",
      },
      { status: 400 }
    );
  }

  // 3. Rate Limiting Protection (5 requests per 15 mins per IP)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor
    ? forwardedFor.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "127.0.0.1";

  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.isAllowed) {
    const retrySeconds = Math.ceil(rateCheck.resetMs / 1000);
    return NextResponse.json(
      {
        success: false,
        error: "Too many consultation requests from this connection. Please wait before attempting another submission or call us directly.",
        retryAfter: retrySeconds,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(retrySeconds),
        },
      }
    );
  }

  // 4. Server-Side Validation & Sanitization
  const validation = validateEnquiryPayload(body);

  // Honeypot spam trap triggered: silently absorb without sending email
  if (validation.isSpam) {
    return NextResponse.json(
      {
        success: true,
        message: "Your project specification inquiry has been received.",
      },
      { status: 200 }
    );
  }

  if (!validation.isValid || !validation.sanitizedData) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed. Please verify the submitted information.",
        errors: validation.errors,
      },
      { status: 422 }
    );
  }

  // 5. Submit through Delivery Provider (Resend)
  const deliveryResult = await sendEnquiryEmail(validation.sanitizedData);

  if (!deliveryResult.success) {
    if (deliveryResult.code === "PROVIDER_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          success: false,
          code: "PROVIDER_NOT_CONFIGURED",
          error:
            "The direct consultation dispatch channel is currently unconfigured. Please connect directly with principal engineers via telephone (+91 91687 77272) or WhatsApp.",
        },
        { status: 503 }
      );
    }

    if (deliveryResult.code === "PROVIDER_REJECTED") {
      return NextResponse.json(
        {
          success: false,
          code: "PROVIDER_REJECTED",
          error:
            "The delivery provider rejected the transmission. Please contact our corporate office directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        code: "PROVIDER_ERROR",
        error:
          "Unable to complete enquiry transmission due to a network error. Please try again or reach out via direct phone line.",
      },
      { status: 500 }
    );
  }

  // 6. Confirmed Delivery Acceptance
  return NextResponse.json(
    {
      success: true,
      message:
        "Your project specification inquiry has been accepted for transmission to the GJ Buildcon engineering desk.",
      id: deliveryResult.id,
    },
    { status: 200 }
  );
}
