"use client";

import React from "react";

import { motion } from "framer-motion";

const items = [
  "DECCAN BASALT BEDROCK SOCKETING",
  "ROTARY AUGUR PILING RIGS",
  "TURNKEY RCC CIVIL CONTRACTING",
  "10+ YEARS IN PUNE & MAHARASHTRA",
  "CFA & LARGE DIAMETER PILING (600MM–1500MM)",
  "MULTI-CATEGORY STRUCTURAL DELIVERY",
  "CIVIL INFRASTRUCTURE & FOUNDATION ENGINEERING",
  "FOUNDED BY MR. UMESH GATKAL",
];

export const MarqueeTicker: React.FC = () => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(24, 21, 18, 0.95)" }}
      transition={{ duration: 0.3 }}
      className="relative w-full overflow-hidden border-y border-[#2D2622] bg-[#161311] py-3.5 select-none"
      aria-label="Engineering Capabilities Ticker"
    >
      <div className="animate-marquee-scroll flex items-center">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <motion.div
              key={`seq1-${idx}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-8 cursor-default group"
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#E2DDD5] group-hover:text-[#FFFFFF] transition-colors">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2A284]" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        {/* Sequence 2 for continuous seamless loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <motion.div
              key={`seq2-${idx}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-8 cursor-default group"
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#E2DDD5] group-hover:text-[#FFFFFF] transition-colors">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2A284]" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
