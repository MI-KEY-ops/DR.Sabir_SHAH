"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Consultant Cardiologist",
    institution: "City General Hospital",
    period: "2015 - Present",
    description:
      "Leading the cardiology department, specializing in interventional procedures and patient care for complex cardiovascular conditions.",
  },
  {
    role: "Cardiology Fellowship",
    institution: "University of Medicine",
    period: "2012 - 2015",
    description:
      "Completed a rigorous fellowship in interventional cardiology, gaining expertise in advanced diagnostic and therapeutic techniques.",
  },
  {
    role: "Internal Medicine Residency",
    institution: "St. Luke's Medical Center",
    period: "2009 - 2012",
    description:
      "Gained comprehensive experience in internal medicine, with a focus on critical care and cardiovascular health.",
  },
  {
    role: "Medical Internship",
    institution: "Hopewell Clinic",
    period: "2008 - 2009",
    description:
      "Foundation year providing primary care and initial exposure to various medical specialties, which ignited my passion for cardiology.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          Professional Experience
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          A timeline of my medical career, from internship to my current role.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"
          aria-hidden="true"
        ></div>

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:order-2"
                  }`}
                >
                  <Card className="group transition-all duration-300 hover:shadow-2xl hover:border-accent hover:scale-105">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl font-headline text-primary">
                            {item.role}
                          </CardTitle>
                          <p className="font-semibold text-accent">
                            {item.institution}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground whitespace-nowrap bg-secondary px-2 py-1 rounded-md">
                          {item.period}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-secondary border-2 border-primary`}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                {/* Spacer for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
