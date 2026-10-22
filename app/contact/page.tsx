import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryTerminal } from "@/components/sections/EnquiryTerminal";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Civil Construction Consultation & Headquarters in Pune",
  description:
    "Contact GJ Buildcon (G and J Buildcon) in Pimple Saudagar, Pune. Direct consultation for turnkey civil construction, residential towers, commercial floorplates, and secondary foundation engineering.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact GJ Buildcon | Premier Civil Construction in Pune",
    description:
      "Direct consultation terminal for turnkey civil construction contracts and structural engineering in Pune and Maharashtra.",
    url: "https://gjbuildcon.com/contact",
  },
};

const faqs = [
  {
    q: "What geographic areas do you cover for civil and piling works?",
    a: "We actively serve the Pune Metropolitan Region (Pimple Saudagar, Pimple Nilakh, Baner, Balewadi, Hinjawadi, PCMC, Ambegaon, Hadapsar, Chakan) and mobilize heavy rotary piling fleets across Western Maharashtra.",
  },
  {
    q: "How quickly can construction crews and equipment be mobilized to our site?",
    a: "With our dedicated in-house civil engineering teams and comprehensive construction plant, preliminary mobilization can initiate within 48 to 72 hours following site clearance and architectural drawings sign-off.",
  },
  {
    q: "Can you provide both geotechnical piling and civil superstructure construction?",
    a: "Yes. Our signature advantage is dual-vertical integration. We can execute the entire sequence from deep bedrock piling and basement shoring to complete turnkey RCC frame and finishing.",
  },
  {
    q: "What documentation is required to initiate a structural quote?",
    a: "Providing your architectural drawings, structural consultant's preliminary pile layout or floorplate plan, and geotechnical soil/borehole investigation reports allows us to deliver a comprehensive technical estimate within 48 hours.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#12100E] text-[#FFFFFF] selection:bg-[#C2A284]/30 selection:text-[#FFFFFF]">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <PageHeader
          badge="Direct Engineering Dialogue"
          title="Contact Us &amp; Consultation Terminal"
          subtitle="Initiate direct consultation with our principal civil engineering and structural construction leadership at our Pimple Saudagar headquarters in Pune."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        {/* Section 1: Executive Direct Channels Bar */}
        <section className="py-12 border-b border-[#2D2622] bg-[#161311]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Direct Phone */}
              <a
                href={`tel:${companyData.phone}`}
                className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-6 hover:border-[#C2A284]/60 transition-colors group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#181512] border border-[#2D2622] group-hover:border-[#C2A284] transition-colors shrink-0">
                  <Phone className="h-5 w-5 text-[#C2A284]" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] font-semibold">
                    Direct Voice Line
                  </div>
                  <div className="font-bourbon text-lg text-[#FFFFFF] font-bold mt-1 group-hover:text-[#C2A284] transition-colors">
                    {companyData.phoneDisplay}
                  </div>
                  <div className="font-sans text-[11px] text-[#A89F95] mt-0.5">
                    Monday–Saturday // 9 AM–7 PM IST
                  </div>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a
                href={`https://wa.me/${companyData.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-6 hover:border-[#C2A284]/60 transition-colors group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#181512] border border-[#2D2622] group-hover:border-[#C2A284] transition-colors shrink-0">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] font-semibold">
                    WhatsApp Channel
                  </div>
                  <div className="font-bourbon text-lg text-[#FFFFFF] font-bold mt-1 group-hover:text-emerald-400 transition-colors">
                    {companyData.phoneDisplay}
                  </div>
                  <div className="font-sans text-[11px] text-[#A89F95] mt-0.5">
                    Fast Document &amp; Plan Sharing
                  </div>
                </div>
              </a>

              {/* Official Email */}
              <a
                href={`mailto:${companyData.email}`}
                className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-6 hover:border-[#C2A284]/60 transition-colors group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#181512] border border-[#2D2622] group-hover:border-[#C2A284] transition-colors shrink-0">
                  <Mail className="h-5 w-5 text-[#C2A284]" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] font-semibold">
                    Official Corporate Email
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#FFFFFF] font-bold mt-1 truncate group-hover:text-[#C2A284] transition-colors">
                    {companyData.email}
                  </div>
                  <div className="font-sans text-[11px] text-[#A89F95] mt-0.5">
                    Tenders, BOQs &amp; Inquiries
                  </div>
                </div>
              </a>

              {/* Corporate Office */}
              <div className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#181512] border border-[#2D2622] shrink-0">
                  <MapPin className="h-5 w-5 text-[#C2A284]" />
                </div>
                <div>
                  <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] font-semibold">
                    Headquarters
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#FFFFFF] font-medium mt-1">
                    Ganga Park, Pimple Saudagar
                  </div>
                  <div className="font-sans text-[11px] text-[#A89F95] mt-0.5">
                    Pune, Maharashtra 411027
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Complete Interactive Consultation Terminal */}
        <EnquiryTerminal />

        {/* Section 3: Office Map & Field Coordinates */}
        <section id="map" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Map Narrative */}
              <div className="lg:col-span-5">
                <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                  Strategic Location
                </div>
                <h2 className="font-bourbon text-3xl sm:text-4xl uppercase font-bold mb-6">
                  Positioned in Pune&apos;s High-Growth Core
                </h2>
                <div className="space-y-4 font-sans text-sm text-[#D4CDC5] leading-relaxed">
                  <p>
                    Our headquarters in Pimple Saudagar places our operational management and geotechnical dispatch at the intersection of Pune and Pimpri-Chinchwad municipal corridors.
                  </p>
                  <p>
                    Whether your site is in Baner, Hinjawadi Phase 1–3, Tathawade, Wakad, or Ambegaon, our engineering staff can conduct in-person site inspections within hours.
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-xl border border-[#2D2622] bg-[#161311] space-y-3 font-sans text-xs">
                  <div className="flex justify-between items-center text-[#A89F95]">
                    <span>Exact GPS Coordinates:</span>
                    <span className="text-[#C2A284] font-mono font-semibold">
                      18.5986&deg; N, 73.7978&deg; E
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#A89F95]">
                    <span>Postal Code:</span>
                    <span className="text-[#FFFFFF] font-semibold">411027 (Pune)</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A89F95]">
                    <span>Registered Firm:</span>
                    <span className="text-[#FFFFFF] font-semibold">{companyData.legalName}</span>
                  </div>
                </div>
              </div>

              {/* Map Frame */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#3E342B] bg-[#161311] shadow-2xl">
                  <iframe
                    title="GJ Buildcon Headquarters Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.793740924903!2d73.7880!3d18.5986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a897!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#2D2622] bg-[#12100E]/90 p-3.5 backdrop-blur-md flex items-center justify-between text-xs font-sans">
                    <span className="text-[#A89F95]">Pimple Saudagar, Pune // Ganga Park</span>
                    <a
                      href="https://maps.google.com/?q=18.5986,73.7978"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C2A284] hover:underline uppercase font-semibold"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Frequently Asked Questions */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#161311]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            
            <div className="max-w-2xl mb-16">
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                Client Questions Answered
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <HelpCircle className="h-5 w-5 text-[#C2A284] shrink-0 mt-0.5" />
                      <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF]">
                        {faq.q}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed pl-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
