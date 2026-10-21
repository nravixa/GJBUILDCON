import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalLabelProps {
  label: string;
  value: string;
  className?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({ label, value, className }) => {
  return (
    <div className={cn("inline-flex flex-col font-mono text-[11px]", className)}>
      <span className="text-[10px] tracking-wider text-[#64748B] uppercase">{label}</span>
      <span className="font-semibold text-[#F2F0E9] tracking-wide">{value}</span>
    </div>
  );
};
