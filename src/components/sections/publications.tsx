"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Newspaper, Link as LinkIcon } from "lucide-react";

const publications = [
  {
    title: "Advancements in Non-Invasive Cardiac Imaging",
    journal: "Journal of Cardiology",
    year: "2022",
    doi: "10.1234/joc.2022.5678",
    abstract:
      "This review explores recent advancements in non-invasive cardiac imaging techniques, including cardiac MRI, CT, and echocardiography, and their impact on clinical practice.",
  },
  {
    title: "The Role of AI in Predicting Cardiovascular Events",
    journal: "AI in Medicine",
    year: "2021",
    doi: "10.5678/aim.2021.1234",
    abstract:
      "A groundbreaking study on leveraging machine learning algorithms to predict major adverse cardiovascular events using electronic health records.",
  },
  {
    title: "Novel Therapeutic Targets for Heart Failure",
    journal: "The Lancet",
    year: "2020",
    doi: "10.1111/lancet.2020.9012",
    abstract:
      "Identifies and discusses several promising new therapeutic targets for the treatment of both systolic and diastolic heart failure.",
  },
];

type Publication = (typeof publications)[0];

export default function Publications() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  return (
    <SectionWrapper id="publications" className="">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          Research & Publications
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Contributing to the advancement of cardiovascular medicine through
          research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
          >
            <Card
              className="h-full flex flex-col cursor-pointer"
              onClick={() => setSelectedPub(pub)}
            >
              <CardHeader>
                <div className="mb-4">
                  <Newspaper className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-xl font-headline text-primary">
                  {pub.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">
                  {pub.journal}, {pub.year}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedPub} onOpenChange={() => setSelectedPub(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPub && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline text-primary">
                  {selectedPub.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedPub.journal} - {selectedPub.year}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <h3 className="font-semibold">Abstract</h3>
                <p className="text-muted-foreground">{selectedPub.abstract}</p>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                <a
                  href={`https://doi.org/${selectedPub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  DOI: {selectedPub.doi}
                </a>
              </div>
              <DialogClose />
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
