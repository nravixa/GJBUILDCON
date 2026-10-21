import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "default",
  className,
  ...props
}) => {
  const sizeMap = {
    narrow: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12",
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
