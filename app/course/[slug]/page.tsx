import { unstable_cache } from "next/cache";
import { getCourse } from "@/lib/getCourse";
import CourseClient from "@/components/CourseClient";

type Props = {
  params: Promise<{ slug: string }>;
};

const getCachedCourse = unstable_cache(
  async (slug: string) => getCourse(slug),
  ["course-by-slug"],
  { revalidate: 60 * 10, tags: ["course"] },
);

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = await getCachedCourse(slug);

  return (
    <CourseClient chapters={course.chapters} sandboxUrl={course.sandboxUrl} />
  );
}
