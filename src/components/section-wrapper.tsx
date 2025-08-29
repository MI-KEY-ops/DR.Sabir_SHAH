"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-16 md:py-24 overflow-hidden", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
}
