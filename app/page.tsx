import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
};

function getCourses(): Course[] {
  const dir = path.join(process.cwd(), "content/courses");

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const fileContent = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        level: data.level || "Débutant",
      };
    });
}

export default function Home() {
  const courses = getCourses();

  return (
    <main className="home">
      <div className="home-header">
        <h1 className="home-title">Formations</h1>
        <p className="home-subtitle">Apprends à programmer par la pratique</p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/course/${course.slug}`}
            className="course-card"
          >
            <div className="course-card-badge">{course.level}</div>
            <h2 className="course-card-title">{course.title}</h2>
            {course.description && (
              <p className="course-card-desc">{course.description}</p>
            )}
            <span className="course-card-cta">Commencer →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
