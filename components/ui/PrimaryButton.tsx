import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  size = "md",
  children,
  className,
  disabled,
  ...props
}) => {
  const sizeMap = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-[13px] sm:text-sm",
    lg: "px-8 py-3.5 text-sm sm:text-base",
  };

  const baseClasses = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold uppercase tracking-wider transition-all duration-300",
    "border border-[#191B1F] bg-[#191B1F] text-[#F7F5F0] hover:bg-transparent hover:text-[#191B1F]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A4A32]",
    "disabled:pointer-events-none disabled:opacity-50",
    fullWidth && "w-full",
    sizeMap[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0 transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
