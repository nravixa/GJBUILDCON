/**
 * Enquiry Validation & Sanitization Engine
 *
 * Implements strict server-side validation, field normalization,
 * header injection prevention, and honeypot spam detection.
 */

export interface EnquiryInput {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  vertical?: unknown;
  location?: unknown;
  message?: unknown;
  fax_number?: unknown; // Invisible Honeypot Field
}

export interface SanitizedEnquiry {
  name: string;
  phone: string;
  email?: string;
  vertical: string;
  location?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  isSpam?: boolean;
  errors: Record<string, string>;
  sanitizedData?: SanitizedEnquiry;
}

export const ALLOWED_VERTICALS = [
  "Residential Civil Works",
  "Commercial Complex",
  "Institutional Infrastructure",
  "Augur Rotary Piling",
  "Tripod Piling",
  "Tractor Piling",
  "Comprehensive Joint Venture",
] as const;

export type AllowedVertical = (typeof ALLOWED_VERTICALS)[number];

/**
 * Strips carriage returns and line feeds to prevent header injection attacks.
 */
function stripCrlf(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Normalizes phone numbers by removing spaces, dashes, dots, and brackets.
 * Retains leading plus for international country codes.
 */
export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\.\(\)]/g, "");
  return cleaned;
}

/**
 * Validates phone number syntax:
 * Accepts 10 to 15 digits, optionally prefixed with a single '+'.
 * Covers standard Indian mobile/landline numbers (e.g. +919876543210, 9876543210)
 * as well as standard E.164 international formats.
 */
export function isValidPhone(phone: string): boolean {
  const normalized = normalizePhone(phone);
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(normalized);
}

/**
 * Validates standard email address syntax.
 */
export function isValidEmail(email: string): boolean {
  // RFC 5322 compliant practical regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Validates and normalizes raw enquiry payload.
 */
export function validateEnquiryPayload(payload: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return {
      isValid: false,
      errors: { _form: "Malformed request payload. Expected a JSON object." },
    };
  }

  const data = payload as EnquiryInput;

  // 1. Honeypot Spam Check
  if (data.fax_number && typeof data.fax_number === "string" && data.fax_number.trim().length > 0) {
    return {
      isValid: false,
      isSpam: true,
      errors: {},
    };
  }

  // 2. Validate Full Name (Required)
  if (typeof data.name !== "string" || !data.name.trim()) {
    errors.name = "Full Name is required.";
  } else {
    const cleanName = stripCrlf(data.name);
    if (cleanName.length < 2) {
      errors.name = "Full Name must contain at least 2 characters.";
    } else if (cleanName.length > 100) {
      errors.name = "Full Name cannot exceed 100 characters.";
    }
  }

  // 3. Validate Phone Number (Required)
  if (typeof data.phone !== "string" || !data.phone.trim()) {
    errors.phone = "Contact Phone or WhatsApp number is required.";
  } else {
    const cleanPhone = stripCrlf(data.phone);
    if (!isValidPhone(cleanPhone)) {
      errors.phone = "Please enter a valid phone number (10 to 15 digits, e.g. +91 98765 43210).";
    }
  }

  // 4. Validate Email Address (Optional)
  let cleanEmail: string | undefined;
  if (data.email !== undefined && data.email !== null && typeof data.email === "string" && data.email.trim().length > 0) {
    cleanEmail = stripCrlf(data.email).toLowerCase();
    if (cleanEmail.length > 100) {
      errors.email = "Email address cannot exceed 100 characters.";
    } else if (!isValidEmail(cleanEmail)) {
      errors.email = "Please enter a valid email address (e.g. name@company.com).";
    }
  }

  // 5. Validate Discipline of Interest (Enum)
  let cleanVertical = "Residential Civil Works";
  if (data.vertical !== undefined && data.vertical !== null) {
    if (typeof data.vertical === "string" && ALLOWED_VERTICALS.includes(data.vertical as AllowedVertical)) {
      cleanVertical = data.vertical;
    } else {
      errors.vertical = "Please select a valid engineering discipline from the authorized list.";
    }
  }

  // 6. Validate Site Location (Optional)
  let cleanLocation: string | undefined;
  if (data.location !== undefined && data.location !== null && typeof data.location === "string" && data.location.trim().length > 0) {
    const loc = stripCrlf(data.location);
    if (loc.length > 150) {
      errors.location = "Site Location cannot exceed 150 characters.";
    } else {
      cleanLocation = loc;
    }
  }

  // 7. Validate Scope Notes / Message (Optional)
  let cleanMessage: string | undefined;
  if (data.message !== undefined && data.message !== null && typeof data.message === "string" && data.message.trim().length > 0) {
    const msg = data.message.trim();
    if (msg.length > 2000) {
      errors.message = "Project Details cannot exceed 2000 characters.";
    } else {
      cleanMessage = msg;
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return {
    isValid: true,
    errors: {},
    sanitizedData: {
      name: stripCrlf(data.name as string),
      phone: normalizePhone(data.phone as string),
      email: cleanEmail,
      vertical: cleanVertical,
      location: cleanLocation,
      message: cleanMessage,
    },
  };
}
