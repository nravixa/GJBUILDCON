"use client";

import React, { useState, useEffect, useRef } from "react";
import { companyData } from "@/data/company";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  RotateCcw,
  Loader2,
  AlertCircle,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const EnquiryTerminal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vertical: "Residential Civil Works",
    location: "",
    message: "",
    fax_number: "", // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [confirmedDetails, setConfirmedDetails] = useState({
    name: "",
    phone: "",
    vertical: "Residential Civil Works",
    location: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (columnsRef.current) {
        const cols = columnsRef.current.children;
        gsap.fromTo(
          cols,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clearFieldError = (fieldName: string) => {
    setFieldErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  };

  const validateClientInput = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Full Name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Full Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\.\(\)]/g, "");
    if (!formData.phone.trim()) {
      errors.phone = "Contact Phone or WhatsApp is required.";
    } else if (!/^\+?[0-9]{10,15}$/.test(cleanPhone)) {
      errors.phone = "Please enter a valid phone number (10 to 15 digits).";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateClientInput()) {
      // Deliberately move focus to the first invalid field so screen readers immediately announce the error
      const firstInvalidId =
        !formData.name.trim() || formData.name.trim().length < 2
          ? "client-name"
          : !formData.phone.trim() || !/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[\s\-\.\(\)]/g, ""))
          ? "client-phone"
          : "client-email";
      const element = document.getElementById(firstInvalidId);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
        errors?: Record<string, string>;
      };

      if (response.ok && result.success) {
        setConfirmedDetails({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          vertical: formData.vertical,
          location: formData.location.trim(),
        });
        setSubmitSuccess(true);
        setFieldErrors({});
        setServerError("");
        setFormData({
          name: "",
          phone: "",
          email: "",
          vertical: "Residential Civil Works",
          location: "",
          message: "",
          fax_number: "",
        });
      } else {
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        setServerError(
          result.error ||
            "Unable to transmit consultation specifications. Please contact principal engineers directly via phone or WhatsApp."
        );
      }
    } catch {
      setServerError(
        "Network connection error. Please verify your internet connection or reach our direct telephone desk at +91 91687 77272."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      vertical: "Residential Civil Works",
      location: "",
      message: "",
      fax_number: "",
    });
    setFieldErrors({});
    setSubmitSuccess(false);
    setServerError("");
  };

  return (
    <section
      ref={sectionRef}
      id="enquiry"
      aria-label="Chapter 07: Direct Consultation Terminal"
      className="border-b border-[#2D2622] bg-[#12100E] py-20 sm:py-28 lg:py-32 text-[#FFFFFF]"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#2D2622] pb-8"
        >
          <div>
            <div className="font-monument text-[10px] uppercase tracking-[0.22em] text-[#C2A284] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
              <span>Chapter 07 // Direct Consultation Terminal</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.96] text-[#FFFFFF]">
              Initiate Project Consultation
            </h2>
          </div>
          <div className="font-monument text-[10px] text-[#8F857B] uppercase tracking-[0.2em]">
            Turnkey Civil Tenders · Deep Foundation Piling Deployments
          </div>
        </div>

        {/* 2-Column Architectural Layout: Channels (5 cols) + Form (7 cols) */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 lg:grid-cols-12 border border-[#2D2622] bg-[#2D2622] gap-[1px] rounded-sm"
        >
          
          {/* Left Column: Direct Executive Channels (5 cols) */}
          <div className="lg:col-span-5 bg-[#161311] p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div>
              <div className="font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-2 pb-3 border-b border-[#2D2622] flex items-center justify-between">
                <span>DIRECT COMMUNICATION DESK</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-monument text-[9px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>
              <h3 className="font-bourbon text-2xl sm:text-3xl uppercase text-[#FFFFFF] mb-3">
                Executive Channels
              </h3>
              <p className="font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed mb-6">
                Connect directly with principal project engineers without intermediary call centers.
              </p>

              {/* Channel Links */}
              <div className="space-y-4">
                
                {/* Voice Line */}
                <motion.a
                  href={`tel:${companyData.phone}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="flex items-start gap-4 p-4 border border-[#2D2622] bg-[#12100E] hover:bg-[#1C1815] hover:border-[#C2A284]/50 transition-colors group cursor-pointer rounded-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-[#2D2622] bg-[#181512] text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-monument text-[9px] uppercase tracking-wider text-[#8F857B] block">
                      Direct Voice Line
                    </span>
                    <span className="font-mono text-sm font-bold text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors">
                      {companyData.phoneDisplay}
                    </span>
                    <span className="font-futura text-[11px] text-[#8F857B] block mt-0.5">
                      Monday to Saturday · 09:00 AM – 07:00 PM IST
                    </span>
                  </div>
                </motion.a>

                {/* WhatsApp Channel */}
                <motion.a
                  href={`https://wa.me/${companyData.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="flex items-start gap-4 p-4 border border-[#2D2622] bg-[#12100E] hover:bg-[#1C1815] hover:border-emerald-500/50 transition-colors group cursor-pointer rounded-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-[#2D2622] bg-[#181512] text-[#FFFFFF] group-hover:text-emerald-400 transition-colors flex-shrink-0">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-monument text-[9px] uppercase tracking-wider text-[#8F857B] block">
                      WhatsApp Channel
                    </span>
                    <span className="font-mono text-sm font-bold text-[#FFFFFF] group-hover:text-emerald-400 transition-colors">
                      {companyData.phoneDisplay}
                    </span>
                    <span className="font-futura text-[11px] text-[#8F857B] block mt-0.5">
                      Rapid coordination for site drawings &amp; location coordinates
                    </span>
                  </div>
                </motion.a>

                {/* Email Address */}
                <motion.a
                  href={`mailto:${companyData.email}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="flex items-start gap-4 p-4 border border-[#2D2622] bg-[#12100E] hover:bg-[#1C1815] hover:border-[#C2A284]/50 transition-colors group cursor-pointer rounded-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-[#2D2622] bg-[#181512] text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-monument text-[9px] uppercase tracking-wider text-[#8F857B] block">
                      Tenders &amp; Corporate Inquiries
                    </span>
                    <span className="font-mono text-sm font-bold text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors">
                      {companyData.email}
                    </span>
                    <span className="font-futura text-[11px] text-[#8F857B] block mt-0.5">
                      Tender documents, BOQs &amp; architectural drawings
                    </span>
                  </div>
                </motion.a>

                {/* Physical Office Address */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="flex items-start gap-4 p-4 border border-[#2D2622] bg-[#12100E] transition-colors rounded-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center border border-[#2D2622] bg-[#181512] text-[#FFFFFF] flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-monument text-[9px] uppercase tracking-wider text-[#8F857B] block">
                      Corporate Headquarters
                    </span>
                    <address className="font-futura text-xs text-[#C5BCB3] not-italic leading-relaxed mt-1">
                      {companyData.address.line1}, {companyData.address.line2},<br />
                      {companyData.address.locality}, {companyData.address.city} {companyData.address.pincode},<br />
                      {companyData.address.state}, India
                    </address>
                  </div>
                </motion.div>

              </div>
            </div>

            <div className="pt-4 border-t border-[#2D2622] font-monument text-[10px] text-[#8F857B] uppercase tracking-wider">
              Verified Contact Footprint · Headquartered in Pune
            </div>
          </div>

          {/* Right Column: Project Consultation Terminal Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#181512] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#2D2622] mb-6">
                <span className="font-monument text-[10px] uppercase tracking-[0.2em] text-[#C2A284]">
                  SPECIFICATION FORM
                </span>
                <span className="font-monument text-[10px] text-[#8F857B] uppercase tracking-wider">
                  DIRECT SUBMISSION
                </span>
              </div>

              {submitSuccess ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-8 border border-emerald-500/40 bg-[#12100E] text-center space-y-4 rounded-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-none border border-emerald-500 bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bourbon text-xl uppercase text-[#FFFFFF]">
                      Consultation Request Transmitted
                    </h4>
                    <p className="mt-2 font-futura text-xs sm:text-sm text-[#C5BCB3] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#FFFFFF]">{confirmedDetails.name}</strong>. Your project specifications have been securely received by the GJ Buildcon engineering desk. A principal engineer will review your structural requirements and respond directly via your contact details.
                    </p>
                  </div>

                  <div className="border border-[#2D2622] bg-[#161311] p-4 font-mono text-xs text-left text-[#C5BCB3] max-w-md mx-auto space-y-1">
                    <div><strong>Discipline:</strong> {confirmedDetails.vertical}</div>
                    <div><strong>Contact:</strong> {confirmedDetails.phone}</div>
                    {confirmedDetails.location && <div><strong>Location:</strong> {confirmedDetails.location}</div>}
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 border border-[#FFFFFF] bg-[#FFFFFF] text-[#12100E] px-5 py-2.5 font-monument text-xs uppercase tracking-wider hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A284]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Submit Another Specification</span>
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Invisible Honeypot Spam Guard */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="company-fax">Do not fill this field</label>
                    <input
                      id="company-fax"
                      type="text"
                      name="fax_number"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.fax_number}
                      onChange={(e) => setFormData({ ...formData, fax_number: e.target.value })}
                    />
                  </div>

                  {/* Accessible Server Error Alert */}
                  {serverError && (
                    <div
                      id="enquiry-server-error"
                      role="alert"
                      aria-live="assertive"
                      className="border border-rose-500/50 bg-rose-950/20 p-4 font-mono text-xs text-rose-300 flex items-start gap-3 leading-relaxed rounded-sm"
                    >
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block mb-0.5 font-bold">Transmission Alert</strong>
                        <span>{serverError}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="client-name" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                        Full Name <span className="text-[#C2A284]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          clearFieldError("name");
                        }}
                        placeholder="e.g. Umesh Sharma"
                        aria-invalid={fieldErrors.name ? "true" : undefined}
                        aria-describedby={fieldErrors.name ? "client-name-error" : undefined}
                        className={`w-full border bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] placeholder-[#8F857B] focus-visible:outline-none focus-visible:ring-1 transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed ${
                          fieldErrors.name
                            ? "border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500"
                            : "border-[#2D2622] focus-visible:border-[#C2A284] focus-visible:ring-[#C2A284]"
                        }`}
                      />
                      {fieldErrors.name && (
                        <div id="client-name-error" role="alert" className="font-mono text-[11px] text-rose-400 mt-1.5 flex items-center gap-1.5">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                          <span><span className="sr-only">Error: </span>{fieldErrors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="client-phone" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                        Contact Phone / WhatsApp <span className="text-[#C2A284]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          clearFieldError("phone");
                        }}
                        placeholder="+91 98765 43210"
                        aria-invalid={fieldErrors.phone ? "true" : undefined}
                        aria-describedby={fieldErrors.phone ? "client-phone-error" : undefined}
                        className={`w-full border bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] placeholder-[#8F857B] focus-visible:outline-none focus-visible:ring-1 transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed ${
                          fieldErrors.phone
                            ? "border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500"
                            : "border-[#2D2622] focus-visible:border-[#C2A284] focus-visible:ring-[#C2A284]"
                        }`}
                      />
                      {fieldErrors.phone && (
                        <div id="client-phone-error" role="alert" className="font-mono text-[11px] text-rose-400 mt-1.5 flex items-center gap-1.5">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                          <span><span className="sr-only">Error: </span>{fieldErrors.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="client-email" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          clearFieldError("email");
                        }}
                        placeholder="name@company.com"
                        aria-invalid={fieldErrors.email ? "true" : undefined}
                        aria-describedby={fieldErrors.email ? "client-email-error" : undefined}
                        className={`w-full border bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] placeholder-[#8F857B] focus-visible:outline-none focus-visible:ring-1 transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed ${
                          fieldErrors.email
                            ? "border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500"
                            : "border-[#2D2622] focus-visible:border-[#C2A284] focus-visible:ring-[#C2A284]"
                        }`}
                      />
                      {fieldErrors.email && (
                        <div id="client-email-error" role="alert" className="font-mono text-[11px] text-rose-400 mt-1.5 flex items-center gap-1.5">
                          <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                          <span><span className="sr-only">Error: </span>{fieldErrors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Discipline of Interest */}
                    <div>
                      <label htmlFor="project-vertical" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                        Discipline of Interest
                      </label>
                      <select
                        id="project-vertical"
                        disabled={isSubmitting}
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full border border-[#2D2622] bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] focus-visible:border-[#C2A284] transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <option value="Residential Civil Works" className="bg-[#12100E] text-[#FFFFFF]">Residential Civil Construction</option>
                        <option value="Commercial Complex" className="bg-[#12100E] text-[#FFFFFF]">Commercial &amp; Office Complex</option>
                        <option value="Institutional Infrastructure" className="bg-[#12100E] text-[#FFFFFF]">Schools / Hospitals / Civic</option>
                        <option value="Augur Rotary Piling" className="bg-[#12100E] text-[#FFFFFF]">Large-Diameter Augur Rotary Piling</option>
                        <option value="Tripod Piling" className="bg-[#12100E] text-[#FFFFFF]">Tripod Cast-In-Situ Piling</option>
                        <option value="Tractor Piling" className="bg-[#12100E] text-[#FFFFFF]">Tractor &amp; Mobile Infill Piling</option>
                        <option value="Comprehensive Joint Venture" className="bg-[#12100E] text-[#FFFFFF]">Turnkey Joint Venture / EPC</option>
                      </select>
                    </div>
                  </div>

                  {/* Location & Approximate Scope */}
                  <div>
                    <label htmlFor="project-location" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                      Site Location &amp; Approximate Scope (Optional)
                    </label>
                    <input
                      id="project-location"
                      type="text"
                      disabled={isSubmitting}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Pimple Saudagar / 1,50,000 Sq. Ft. RCC Frame"
                      className="w-full border border-[#2D2622] bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] placeholder-[#8F857B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] focus-visible:border-[#C2A284] transition-colors rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Scope Notes */}
                  <div>
                    <label htmlFor="project-message" className="block font-monument text-[10px] uppercase text-[#C5BCB3] tracking-wider mb-1.5">
                      Project Details or Geotechnical Notes
                    </label>
                    <textarea
                      id="project-message"
                      rows={3}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your structural requirements, target timeline, or geotechnical soil conditions..."
                      className="w-full border border-[#2D2622] bg-[#12100E] px-4 py-3 font-futura text-sm text-[#FFFFFF] placeholder-[#8F857B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] focus-visible:border-[#C2A284] transition-colors resize-none rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      whileHover={{ scale: 1.015, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="w-full inline-flex items-center justify-center gap-3 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] text-[#12100E] py-4 px-8 font-monument text-xs uppercase tracking-[0.16em] hover:bg-transparent hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A284] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none text-current" aria-hidden="true" />
                          <span>Transmitting Specifications...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Specifications</span>
                          <span className="font-mono text-sm leading-none">&rarr;</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="text-center pt-2 font-mono text-[10px] text-[#8F857B]">
                    Direct Server Dispatch · Certified Civil &amp; Piling Engineering · Telephone Line: +91 91687 77272
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
