// types/index.ts

export type Chapter = {
  id: string;
  title: string;
  content: string;
};

export type Course = {
  sandboxUrl: string;
  chapters: Chapter[];
};
