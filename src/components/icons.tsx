"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";

export const StethoscopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
    <path d="M8 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8" />
    <path d="M6 6v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9" />
    <path d="M16 8a2 2 0 0 1 2-2h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2Z" />
    <path d="M18 10v2a2 2 0 0 1-2 2h-2" />
  </svg>
);

export const SyringeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m18 2 4 4" />
    <path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0L2.7 16.7a2.4 2.4 0 0 1 0-3.4L13 3" />
    <path d="m8 16 4-4" />
    <path d="m11 13-1.5 1.5" />
    <path d="m3 21 6-6" />
  </svg>
);

export const DnaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.5A4.5 4.5 0 0 1 8.5 10H10a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1.5" />
    <path d="M20 9.5A4.5 4.5 0 0 0 15.5 5H14a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1.5" />
    <path d="M8 12v9" />
    <path d="M16 3v9" />
  </svg>
);

export const MicroscopeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);

export const EkgLine = (props: SVGProps<SVGSVGElement>) => (
  <motion.svg
    width="100%"
    height="40"
    viewBox="0 0 300 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M0 20H80L85 10L95 30L100 20L105 25L110 20H300"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      viewport={{ once: true }}
    />
  </motion.svg>
);
