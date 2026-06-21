// lib/slugify.ts

export function slugify(str: string) {
  return str.toLowerCase().replace(/['"]/g, "").replace(/\s+/g, "-").trim();
}
