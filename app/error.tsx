"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center bg-[#12100E] text-[#FFFFFF]">
      <div className="p-4 rounded-full bg-rose-950/40 border border-rose-500/20 text-rose-400 mb-6">
        <AlertCircle className="h-8 w-8" />
      </div>

      <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
        System Notice
      </div>

      <h1 className="font-bourbon text-3xl sm:text-4xl uppercase font-bold text-[#FFFFFF] mb-4">
        Unable to Load Content
      </h1>

      <p className="font-sans text-sm text-[#D4CDC5] max-w-md mb-8 leading-relaxed">
        An unexpected error occurred while loading this page. Our technical team has been notified.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#12100E] hover:bg-transparent hover:text-[#FFFFFF] transition-all shadow-md"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#181512] px-6 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] hover:border-[#C2A284] transition-all"
        >
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
