import { Course, Chapter } from "@/types";
import { slugify } from "./slugify";
import matter from "gray-matter";

export function parseCourse(markdown: string): Course {
  const { data, content } = matter(markdown);

  const sandboxUrl = data.sandboxUrl || "";

  const chapters: Chapter[] = [];
  const regex = /^#\s+(.*)$/gm;
  const matches = [...content.matchAll(regex)];

  matches.forEach((match, index) => {
    const start = match.index!;
    const end =
      index < matches.length - 1 ? matches[index + 1].index! : content.length;

    const title = match[1];
    const chapterContent = content.slice(start, end).trim();

    chapters.push({
      id: slugify(title),
      title,
      content: chapterContent,
    });
  });

  return { sandboxUrl, chapters };
}
