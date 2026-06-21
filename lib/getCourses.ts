import matter from "gray-matter";
import fs from "fs";
import path from "path";

export async function getCourses() {
  const dir = path.join(process.cwd(), "content/courses");

  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const fileContent = fs.readFileSync(`${dir}/${file}`, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      ...data,
      content,
    };
  });
}
