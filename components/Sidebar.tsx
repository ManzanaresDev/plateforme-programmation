"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { Chapter } from "@/types";

type Props = {
  chapters: Chapter[];
  completed: string[];
  activeId: string;
  onComplete: (id: string) => void;
  onSelect: (id: string) => void;
};

export default function Sidebar({
  chapters,
  completed,
  activeId,
  onComplete,
  onSelect,
}: Props) {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Chapitres</p>
      <ul className="flex flex-col gap-1">
        {chapters.map((c) => {
          const isDone = completed.includes(c.id);
          const isActive = c.id === activeId;

          return (
            <li key={c.id}>
              <Button
                variant="ghost"
                onClick={() => onSelect(c.id)}
                className={`
                  w-full justify-start text-left text-sm px-3 py-2 h-auto
                  ${isActive ? "bg-slate-800 text-white" : "text-slate-400"}
                  ${isDone ? "text-green-400" : ""}
                  hover:bg-slate-800 hover:text-white
                `}
              >
                {isDone ? (
                  <CheckCircle className="mr-2 h-3.5 w-3.5 shrink-0 text-green-400" />
                ) : (
                  <Circle className="mr-2 h-3.5 w-3.5 shrink-0 opacity-30" />
                )}
                {c.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
