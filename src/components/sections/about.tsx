"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EkgLine } from "@/components/icons";
import { BadgeCheck, GraduationCap } from "lucide-react";
import nextConfig from "../../../next.config";

const basePath = nextConfig.basePath || "";

const aboutCards = [
  {
    title: "License",
    icon: BadgeCheck,
    content: "Fully licensed Medical Practitioner, PMDC approved.",
    details: "Reg No: 28665-N (Valid until 24/02/2028)",
  },
  {
    title: "Graduation",
    icon: GraduationCap,
    content: "Graduated from Capital Medical University, Beijing, China.",
    details: "MBBS (Medical Doctor) - 1st Division (2013)",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Beyond the clinic: A commitment to health and human dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
           <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={`${basePath}/dr-sabir-shah.jpg`}
                alt="Dr. Sabir Shah"
                width={600}
                height={800}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="doctor portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white font-headline">Dr. Sabir Shah</h3>
                <p className="text-white/80">Medical Officer</p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2 space-y-8">
            <motion.div
              className="text-lg text-foreground/90 space-y-4 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Dr. Sabir Shah is an enthusiastic and dedicated professional medical doctor who graduated from Capital Medical University, Beijing, China, with extensive experience across all areas of medicine and surgeries. As an exceptional leader, he demonstrates the ability to develop and motivate others to achieve targets through hard work, making him a valuable asset to any organization.
              </p>
              <p>
                He possesses strong project management capabilities, successfully managing projects from conception through to completion. A proactive individual with a logical approach to challenges, Dr. Shah performs effectively even within highly pressurized working environments. Beyond his medical expertise, he serves as a social activist and is actively involved in community health initiatives, particularly focusing on counseling services for students, drug abuse patients, and child health education.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index + 0.6 }}
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
        </div>

        <div className="mt-20">
          <EkgLine />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
