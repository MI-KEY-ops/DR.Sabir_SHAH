"use client";

import { useState, type ReactNode } from "react";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  MessagesSquare,
  Microscope,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import type { ChpeAssignment } from "@/lib/chpe-assignments";

interface ChpeProps {
  assignments: ChpeAssignment[];
}

type ChpeBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "divider" };

function parseChpeBlocks(content: string): ChpeBlock[] {
  const lines = content.split("\n");
  const blocks: ChpeBlock[] = [];
  const paragraphLines: string[] = [];
  let listBlock: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    const text = paragraphLines.join(" ").trim();
    if (text) {
      blocks.push({ type: "paragraph", text });
    }
    paragraphLines.length = 0;
  };

  const flushList = () => {
    if (listBlock) {
      blocks.push({
        type: "list",
        ordered: listBlock.ordered,
        items: listBlock.items,
      });
      listBlock = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      flushParagraph();
      flushList();
      blocks.push({ type: "divider" });
      continue;
    }

    const listMatch = line.match(/^([-*+]|\d+[.)])\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      const ordered = /\d/.test(listMatch[1]);
      if (!listBlock || listBlock.ordered !== ordered) {
        flushList();
        listBlock = { ordered, items: [] };
      }
      listBlock.items.push(listMatch[2].trim());
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      paragraphLines.push(quoteMatch[1]);
      continue;
    }

    if (line === "") {
      flushParagraph();
      flushList();
      continue;
    }

    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function renderChpeInline(text: string, keyPrefix: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        const key = `${keyPrefix}-${index}`;
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return <strong key={key}>{part.slice(2, -2)}</strong>;
        }
        return <span key={key}>{part}</span>;
      })}
    </>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const blocks = parseChpeBlocks(content);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const key = `chpe-block-${index}`;

        if (block.type === "heading") {
          const className =
            block.level <= 1
              ? "text-2xl font-headline font-semibold text-primary mt-2"
              : block.level === 2
                ? "text-xl font-headline font-semibold text-primary mt-2"
                : "text-lg font-headline font-semibold text-primary mt-2";

          const heading = renderChpeInline(block.text, key);

          if (block.level <= 1) {
            return <h3 key={key} className={className}>{heading}</h3>;
          }
          if (block.level === 2) {
            return <h4 key={key} className={className}>{heading}</h4>;
          }
          return <h5 key={key} className={className}>{heading}</h5>;
        }

        if (block.type === "paragraph") {
          return (
            <p key={key} className="text-foreground/90 leading-relaxed">
              {renderChpeInline(block.text, key)}
            </p>
          );
        }

        if (block.type === "list") {
          if (block.ordered) {
            return (
              <ol key={key} className="list-decimal pl-6 space-y-2">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={`${key}-${itemIndex}`}
                    className="text-foreground/90 leading-relaxed"
                  >
                    {renderChpeInline(item, `${key}-${itemIndex}`)}
                  </li>
                ))}
              </ol>
            );
          }

          return (
            <ul key={key} className="list-disc pl-6 space-y-2">
              {block.items.map((item, itemIndex) => (
                <li
                  key={`${key}-${itemIndex}`}
                  className="text-foreground/90 leading-relaxed"
                >
                  {renderChpeInline(item, `${key}-${itemIndex}`)}
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "divider") {
          return <div key={key} className="border-t border-border my-2" />;
        }

        return null;
      })}
    </div>
  );
}

const chpeIconMap: Record<string, LucideIcon> = {
  "Critical Review of Clinical Assessment Methods in a Bajaur Clinic":
    ClipboardCheck,
  "H 1st Workplace Professional Dilemma and Reflection on Colleague Feedback":
    MessagesSquare,
  "H 2nd Professional Dilemma": HeartPulse,
  "H Reflection on Your Journey through CHPE": GraduationCap,
  "Qualitative Research Paper Appraisal of Different Diseases in Bajaur Clinic":
    Microscope,
  "Workbook_Diabetes_Fully_Filled": PenLine,
};

const chpeDescriptionMap: Record<string, string> = {
  "Critical Review of Clinical Assessment Methods in a Bajaur Clinic":
    "Critical review of clinical assessment methods in a primary care setting.",
  "H 1st Workplace Professional Dilemma and Reflection on Colleague Feedback":
    "Workplace professional dilemma, colleague feedback and reflection.",
  "H 2nd Professional Dilemma":
    "Professional dilemma and reflection during diabetes management.",
  "H Reflection on Your Journey through CHPE":
    "Reflective journey through the Certificate in Health Professions Education.",
  "Qualitative Research Paper Appraisal of Different Diseases in Bajaur Clinic":
    "Appraisal of qualitative research on diseases in a Bajaur clinic.",
  "Workbook_Diabetes_Fully_Filled":
    "Completed diabetes research workbook.",
};

export default function Chpe({ assignments }: ChpeProps) {
  const [selectedAssignment, setSelectedAssignment] =
    useState<ChpeAssignment | null>(null);

  return (
    <SectionWrapper id="chpe">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">
            CHPE
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Assignments from the Certificate in Health Professions Education
            (CHPE) program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => {
            const Icon = chpeIconMap[assignment.title] ?? BookOpen;

            return (
              <motion.div
                key={assignment.fileName}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="h-full flex flex-col cursor-pointer"
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  <CardHeader>
                    <div className="mb-4">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-headline text-primary">
                      {assignment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {chpeDescriptionMap[assignment.title] ??
                        "CHPE program assignment."}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0">
                      View Assignment
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <Dialog
        open={selectedAssignment !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedAssignment(null);
          }
        }}
      >
        <DialogContent
          overlayClassName="bg-black/30 backdrop-blur-sm fixed inset-0 z-50"
          className="max-w-2xl gap-6 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl"
          style={{ borderRadius: "1.5rem" }}
        >
          {selectedAssignment && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline text-primary">
                  {selectedAssignment.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/80">
                  {selectedAssignment.fileName.replace(/\.md$/i, "")}
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[65vh] overflow-y-auto pr-2">
                <MarkdownContent content={selectedAssignment.content} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
