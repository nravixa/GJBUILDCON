import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "amber" | "teal" | "slate";
  className?: string;
}

export const EyebrowLabel: React.FC<EyebrowLabelProps> = ({
  children,
  icon,
  variant = "amber",
  className,
}) => {
  const variantMap = {
    amber: "border-amber-500/20 bg-amber-500/5 text-amber-400",
    teal: "border-teal-500/20 bg-teal-500/5 text-teal-400",
    slate: "border-slate-700/40 bg-slate-800/40 text-slate-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-wider uppercase backdrop-blur-sm",
        variantMap[variant],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
