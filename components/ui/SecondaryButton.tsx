import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "outline" | "glass";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  icon,
  iconPosition = "right",
  variant = "outline",
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

  const variantMap = {
    outline:
      "border border-[#DCD7CD] bg-transparent text-[#191B1F] hover:border-[#191B1F] hover:bg-[#ECE8E0]",
    glass:
      "border border-[#262930] bg-[#16191F]/90 backdrop-blur-md text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#121417]",
  };

  const baseClasses = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold uppercase tracking-wider transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A4A32]",
    "disabled:pointer-events-none disabled:opacity-50",
    variantMap[variant],
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
