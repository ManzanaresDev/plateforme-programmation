// lib/getCourse.ts

import fs from "fs";
import path from "path";
import { parseCourse } from "./parseCourse";

function loadCourse(slug: string) {
  const filePath = path.join(process.cwd(), "content/courses", `${slug}.md`);
  const markdown = fs.readFileSync(filePath, "utf8");

  const course = parseCourse(markdown);

  return {
    ...course,
    raw: markdown,
    slug,
  };
}

// cache par slug (IMPORTANT)
export function getCourse(slug: string) {
  return loadCourse(slug);
}
