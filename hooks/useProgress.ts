// hooks/useProgress.ts
"use client";

import { useState } from "react";

const STORAGE_KEY = "python-progress";

export default function useProgress() {
  const [completed, setCompleted] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  const completeChapter = (chapterId: string) => {
    if (completed.includes(chapterId)) return;
    const updated = [...completed, chapterId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setCompleted(updated);
  };

  return { completed, completeChapter };
}
