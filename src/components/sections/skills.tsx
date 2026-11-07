"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StethoscopeIcon } from "@/components/icons";
import { HeartPulse, TestTube, Users, Laptop, BriefcaseMedical, Eye, ShieldQuestion } from "lucide-react";

const skills = [
  { name: "Cardiology (CCU)", icon: HeartPulse, detail: "Experience in Coronary Care Unit." },
  { name: "Internal Medicine", icon: StethoscopeIcon, detail: "Comprehensive care for adults." },
  { name: "General Surgery", icon: BriefcaseMedical, detail: "Experience in surgical procedures." },
  { name: "Ophthalmology", icon: Eye, detail: "Experience in eye care." },
  { name: "Public Health", icon: Users, detail: "Program management and outreach." },
  { name: "Counseling", icon: ShieldQuestion, detail: "Counseling for students and patients." },
  { name: "Leadership", icon: Laptop, detail: "Medical staff and department management." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">
            Professional Skills
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            A combination of clinical expertise, leadership, and community health skills.
          </p>
        </div>

        <TooltipProvider>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="p-6 bg-card rounded-full shadow-lg group-hover:bg-accent group-hover:shadow-xl transition-all duration-300">
                      <skill.icon className="w-10 h-10 text-primary group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <p className="text-sm font-semibold text-center text-foreground">
                      {skill.name}
                    </p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.detail}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </motion.div>
    </SectionWrapper>
  );
}