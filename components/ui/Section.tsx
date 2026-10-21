import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  spacing?: "default" | "tight" | "loose" | "none";
  surface?: "base" | "slate" | "card";
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  spacing = "default",
  surface = "base",
  className,
  ...props
}) => {
  const spacingMap = {
    none: "py-0",
    tight: "py-12 sm:py-16 md:py-20",
    default: "py-20 sm:py-24 md:py-32",
    loose: "py-28 sm:py-36 md:py-44",
  };

  const surfaceMap = {
    base: "bg-[#0B0D11]",
    slate: "bg-[#141820]",
    card: "bg-[#191F2B]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden transition-colors duration-300",
        spacingMap[spacing],
        surfaceMap[surface],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
