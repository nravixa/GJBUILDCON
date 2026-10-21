import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CapabilityItem } from "@/types";

interface ServiceCardProps {
  capability: CapabilityItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ capability, className }) => {
  const isPiling = capability.vertical === "piling";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141820] p-6 sm:p-8 transition-all duration-300",
        "hover:border-amber-500/40 hover:bg-[#191F2B] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider",
              isPiling
                ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                : "border-teal-500/20 bg-teal-500/10 text-teal-400"
            )}
          >
            {isPiling ? "Deep Foundations" : "Civil Construction"}
          </span>
          <ArrowUpRight className="h-5 w-5 text-[#8F857B] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-white transition-colors">
          {capability.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-amber-400/90 tracking-wide">
          {capability.subtitle}
        </p>

        <p className="mt-4 font-sans text-sm text-[#E2DDD5] leading-relaxed">
          {capability.description}
        </p>
      </div>

      {capability.specs && capability.specs.length > 0 && (
        <div className="mt-6 border-t border-white/5 pt-5">
          <span className="font-sans text-xs uppercase tracking-widest text-[#A89F95] font-semibold">
            Key Technical Standards
          </span>
          <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {capability.specs.map((spec, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 font-sans text-xs text-[#E2DDD5]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
