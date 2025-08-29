"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EkgLine } from "@/components/icons";
import { BadgeCheck, GraduationCap } from "lucide-react";

const aboutCards = [
  {
    title: "License",
    icon: BadgeCheck,
    content: "Fully licensed Medical Practitioner, State Board Certified.",
    details: "License No: 12345-67890",
  },
  {
    title: "Specialization",
    icon: GraduationCap,
    content: "Specialized in Interventional Cardiology and Electrophysiology.",
    details: "Fellow of the American College of Cardiology (FACC)",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          About Me
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          A dedicated and compassionate cardiologist with over 15 years of
          experience in diagnosing and treating cardiovascular diseases.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        <motion.div
          className="md:col-span-3 text-lg text-foreground/90 space-y-4 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            My journey in medicine began with a profound fascination for the
            human heart. Today, as a board-certified cardiologist, I am
            committed to providing my patients with the highest standard of
            care, blending cutting-edge technology with a personalized,
            empathetic approach.
          </p>
          <p>
            I believe in empowering patients through education and collaborative
            decision-making, ensuring they are active participants in their own
            health journey. My goal is not just to treat disease, but to improve
            quality of life and promote long-term wellness.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.4 }}
            >
              <Card className="group relative overflow-hidden h-full text-left transition-all duration-300 hover:shadow-xl hover:border-primary">
                <CardHeader className="flex flex-row items-center gap-4">
                  <card.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-headline">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">
                    {card.content}
                  </p>
                  <div className="absolute inset-0 bg-primary/90 p-6 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-primary-foreground text-center font-semibold">
                      {card.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <EkgLine />
      </div>
    </SectionWrapper>
  );
}
