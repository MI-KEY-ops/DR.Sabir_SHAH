"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  StethoscopeIcon,
  SyringeIcon,
  DnaIcon,
  MicroscopeIcon,
} from "@/components/icons";
import { HeartPulse, TestTube, Laptop } from "lucide-react";

const skills = [
  {
    name: "Echocardiography",
    icon: StethoscopeIcon,
    detail: "Advanced 2D/3D and stress echocardiography.",
  },
  {
    name: "Cardiac Catheterization",
    icon: SyringeIcon,
    detail: "Expert in diagnostic and interventional procedures.",
  },
  {
    name: "Electrophysiology",
    icon: HeartPulse,
    detail: "Diagnosis and treatment of heart rhythm disorders.",
  },
  {
    name: "Genetic Cardiology",
    icon: DnaIcon,
    detail: "Assessing inherited cardiac conditions.",
  },
  {
    name: "Pathology Analysis",
    icon: MicroscopeIcon,
    detail: "Microscopic examination of tissue samples.",
  },
  {
    name: "Clinical Trials",
    icon: TestTube,
    detail: "Principal investigator for multiple cardiovascular trials.",
  },
  {
    name: "Telemedicine",
    icon: Laptop,
    detail: "Providing remote consultations and patient monitoring.",
  },
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
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          Professional Skills
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          A combination of clinical expertise, procedural skills, and modern
          medical technologies.
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
    </SectionWrapper>
  );
}
