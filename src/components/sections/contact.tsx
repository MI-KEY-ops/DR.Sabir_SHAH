"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:Anisamips@gmail.com",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+923004205522",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            For appointments or inquiries, please feel free to reach out.
          </p>
        </div>

        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-headline mb-6 text-center">
            Connect with me
          </h3>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-2 bg-primary/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 0.5 * index,
                    }}
                  />
                  <span className="relative block p-4 bg-secondary rounded-full shadow-md group-hover:bg-accent transition-colors duration-300">
                    <link.icon className="h-8 w-8 text-primary group-hover:text-accent-foreground" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
