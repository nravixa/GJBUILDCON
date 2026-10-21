import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label, className }) => {
  return (
    <div
      role="separator"
      className={cn("relative my-8 flex items-center justify-center w-full", className)}
    >
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#F2F0E9]/10 to-transparent" />
      {label && (
        <span className="absolute bg-[#0B0D11] px-4 font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]">
          {label}
        </span>
      )}
    </div>
  );
};
