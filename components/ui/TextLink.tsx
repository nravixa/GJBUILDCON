import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  external = false,
  arrow = true,
  children,
  className,
  ...props
}) => {
  const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const classes = cn(
    "group inline-flex items-center gap-1.5 font-medium text-[#94A3B8] transition-colors duration-200",
    "hover:text-amber-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400",
    className
  );

  const content = (
    <>
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber-400 transition-all duration-200 group-hover:w-full" />
      </span>
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
};
