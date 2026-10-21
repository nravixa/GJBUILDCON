import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalLabelProps {
  label: string;
  value: string;
  className?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({ label, value, className }) => {
  return (
    <div className={cn("inline-flex flex-col font-mono text-xs", className)}>
      <span className="text-xs tracking-wider text-[#A89F95] uppercase font-medium">{label}</span>
      <span className="font-semibold text-[#FFFFFF] tracking-wide">{value}</span>
    </div>
  );
};
