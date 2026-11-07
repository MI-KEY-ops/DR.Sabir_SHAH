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

const publications: Publication[] = [];

type Publication = {
  title: string;
  journal: string;
  year: string;
  doi: string;
  abstract: string;
};

export default function Publications() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  if (publications.length === 0) {
    return null;
  }

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
