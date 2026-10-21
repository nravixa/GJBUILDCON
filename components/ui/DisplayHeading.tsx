import React from "react";
import { cn } from "@/lib/utils";

interface DisplayHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "section" | "card" | "sub";
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const DisplayHeading: React.FC<DisplayHeadingProps> = ({
  as = "h2",
  size = "section",
  children,
  className,
  gradient = false,
}) => {
  const Component = as;

  const sizeMap = {
    hero: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]",
    section: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]",
    card: "text-xl sm:text-2xl font-bold tracking-normal leading-[1.25]",
    sub: "text-lg sm:text-xl font-semibold tracking-normal leading-snug",
  };

  return (
    <Component
      className={cn(
        "font-display text-[#F2F0E9] break-normal",
        sizeMap[size],
        gradient &&
          "bg-gradient-to-r from-[#F2F0E9] via-[#FFFFFF] to-[#94A3B8] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Component>
  );
};
