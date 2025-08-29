"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { StethoscopeIcon } from "@/components/icons";

const titleContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background -z-10" />
      <motion.div
        className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_50%)]"
        animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
        }}
        style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, hsl(var(--primary)/0.05) 0%, transparent 20%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.05) 0%, transparent 20%)`,
            backgroundSize: '200% 200%',
        }}
      />


      <div className="container relative z-10 px-4">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.2,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <StethoscopeIcon className="w-24 h-24 mx-auto text-primary" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={titleItem}
            className="text-5xl font-extrabold tracking-tight font-headline text-primary sm:text-6xl md:text-7xl"
          >
            Dr. Sabir Shah
          </motion.h1>
          <motion.p
            variants={titleItem}
            className="mt-4 max-w-md text-xl text-muted-foreground sm:max-w-2xl md:text-2xl"
          >
            Medical Officer
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="p-2 rounded-full text-primary/70 hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
        </Link>
      </motion.div>
    </section>
  );
}
