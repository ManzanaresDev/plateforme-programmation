"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/types";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  chapter: Chapter;
  index: number;
  total: number;
  isCompleted: boolean;
  onComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function CoursePanel({
  chapter,
  index,
  total,
  isCompleted,
  onComplete,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="course-inner">
      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* Contenu */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {chapter.content}
        </ReactMarkdown>
      </div>

      {/* Navigation */}
      <div className="course-nav">
        {/* Bouton "marquer comme fait" — centré au-dessus sur mobile */}
        <div className="course-nav-complete">
          {!isCompleted ? (
            <Button
              variant="outline"
              onClick={onComplete}
              className="border-green-800 text-green-400 hover:bg-green-950 hover:text-green-300 hover:border-green-600"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Marquer comme fait
            </Button>
          ) : (
            <span className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="h-4 w-4" />
              Complété
            </span>
          )}
        </div>

        {/* Boutons Précédent / Suivant — pleine largeur sur mobile */}
        <div className="course-nav-arrows">
          <Button
            variant="outline"
            onClick={onPrev}
            disabled={index === 0}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Précédent
          </Button>
          <Button
            variant="outline"
            onClick={onNext}
            disabled={index === total - 1}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Suivant
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
