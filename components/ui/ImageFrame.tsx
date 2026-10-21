import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageFrameProps extends Omit<ImageProps, "className"> {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "16/10" | "21/9";
  caption?: string;
  badge?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  aspectRatio = "16/9",
  caption,
  badge,
  alt,
  className,
  containerClassName,
  ...imageProps
}) => {
  const aspectMap = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "16/10": "aspect-[16/10]",
    "21/9": "aspect-[21/9]",
  };

  return (
    <figure className={cn("group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900", containerClassName)}>
      <div className={cn("relative w-full overflow-hidden", aspectMap[aspectRatio])}>
        <Image
          alt={alt}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            className
          )}
          {...imageProps}
        />
        {/* Subtle architectural vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {badge && (
          <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] tracking-wider text-amber-400 backdrop-blur-md">
            {badge}
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="border-t border-white/5 bg-[#141820] px-4 py-2.5 font-mono text-xs text-[#94A3B8]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
