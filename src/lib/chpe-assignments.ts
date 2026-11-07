import fs from "fs";
import path from "path";

export interface ChpeAssignment {
  fileName: string;
  title: string;
  content: string;
}

const chpeDirectory = path.join(process.cwd(), "CHPE Assignments");

export function getChpeAssignments(): ChpeAssignment[] {
  const fileNames = fs
    .readdirSync(chpeDirectory)
    .filter((file) => file.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));

  return fileNames.map((fileName) => ({
    fileName,
    title: fileName.replace(/\.md$/i, ""),
    content: fs.readFileSync(path.join(chpeDirectory, fileName), "utf8"),
  }));
}
