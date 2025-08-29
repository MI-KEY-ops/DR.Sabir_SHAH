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

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.966 0-1.75-.783-1.75-1.75S5.534 3.23 6.5 3.23s1.75.784 1.75 1.75S7.466 6.73 6.5 6.73zM19 19h-3v-5.604c0-1.583-.532-2.666-1.996-2.666-1.08 0-1.734.734-2.01 1.442-.103.255-.129.61-.129.965V19H9V8h3v1.337h.04c.42-.71 1.44-1.737 3.26-1.737 3.49 0 4.7 2.3 4.7 5.295V19z" />
  </svg>
);
