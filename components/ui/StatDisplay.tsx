import React from "react";
import { cn } from "@/lib/utils";

interface StatDisplayProps {
  value: string;
  label: string;
  sublabel?: string;
  suffix?: string;
  index?: string;
  className?: string;
}

export const StatDisplay: React.FC<StatDisplayProps> = ({
  value,
  label,
  sublabel,
  suffix,
  index,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between border-t border-[#F2F0E9]/10 pt-6 pb-2 transition-colors duration-300 hover:border-amber-500/50",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        {index && (
          <span className="font-mono text-xs font-medium tracking-widest text-[#A89F95] group-hover:text-amber-400 transition-colors">
            {index}
          </span>
        )}
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" title="Track Record Metric" />
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] group-hover:text-white transition-colors leading-tight">
          {value}
        </span>
        {suffix && (
          <span className="font-display text-lg sm:text-xl font-medium text-amber-400">
            {suffix}
          </span>
        )}
      </div>

      <div>
        <h4 className="font-sans text-sm font-semibold tracking-wide text-[#FFFFFF]">
          {label}
        </h4>
        {sublabel && (
          <p className="mt-1 font-sans text-xs text-[#E2DDD5] leading-relaxed">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};
