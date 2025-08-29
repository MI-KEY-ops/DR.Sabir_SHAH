"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) =>
        document.getElementById(link.href.substring(1))
      );
      let current = "";
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#" className="flex items-center gap-2">
          <Stethoscope className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary font-headline">
            Dr. Sabir Shah
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                activeSection === link.href.substring(1) && "text-primary"
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="active-nav-link"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-background shadow-lg md:hidden"
          >
            <div className="container mx-auto px-4 pt-20 pb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-4"
              >
                <X className="h-6 w-6" />
              </Button>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-center py-2 text-foreground/80 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
