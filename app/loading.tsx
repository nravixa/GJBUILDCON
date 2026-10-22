import React from "react";

export default function Loading() {
  return (
    <div
      aria-label="Loading page content"
      className="flex min-h-[40vh] items-center justify-center bg-transparent py-16"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-7 w-7 rounded-full border-2 border-[#C2A284]/20 border-t-[#C2A284] animate-spin" />
        <span className="font-sans text-xs uppercase tracking-widest text-[#A89F95]">
          Loading GJ Buildcon
        </span>
      </div>
    </div>
  );
}
