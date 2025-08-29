"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Award, Star } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    title: "PMDC Permanent Registration",
    year: "2028",
    issuer: "Pakistan Medical & Dental Council",
  },
  {
    title: "WHO Certification",
    year: "2023",
    issuer: "Integrated Disease Surveillance & Response",
  },
  {
    title: "COVID-19 Training Course",
    year: "2020",
    issuer: "University of Health Sciences Lahore",
  },
  {
    title: "MBBS, 1st Division",
    year: "2013",
    issuer: "Capital Medical University, Beijing",
  },
  {
    title: "Sports Leadership",
    year: "",
    issuer: "Captain of Cricket & Football Teams",
  },
];

export default function Awards() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <SectionWrapper id="awards" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          Achievements & Certifications
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Recognitions of my commitment to excellence and continuous learning.
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {awards.map((award, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <motion.div
                  className="group/tilt [transform-style:preserve-3d]"
                  whileHover="hover"
                >
                  <Card className="relative overflow-hidden h-64 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-card to-secondary transition-all duration-300 group-hover/tilt:[transform:perspective(1000px)_rotateX(10deg)_rotateY(-10deg)_scale(1.05)] shadow-lg hover:shadow-2xl border-yellow-500/30">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.2), transparent 70%)",
                      }}
                      variants={{
                        hover: {
                          opacity: [0, 1, 0.5, 0],
                          scale: [1, 1.5, 2],
                        },
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    <Award className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold font-headline text-primary">
                      {award.title}
                    </h3>
                    <p className="text-muted-foreground font-semibold">
                      {award.issuer}{award.year && ` - ${award.year}`}
                    </p>
                    <div className="absolute top-4 right-4 text-yellow-500 flex gap-1">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </Card>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-50px] text-primary hover:bg-primary/10" />
        <CarouselNext className="right-[-50px] text-primary hover:bg-primary/10" />
      </Carousel>
    </SectionWrapper>
  );
}
