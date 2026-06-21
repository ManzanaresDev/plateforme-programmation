"use client";

import { useState } from "react";
import useProgress from "@/hooks/useProgress";
import Sidebar from "./Sidebar";
import CoursePanel from "./CoursePanel";
import Sandbox from "./Sandbox";
import { Chapter } from "@/types";

type Tab = "course" | "sandbox";

type Props = {
  chapters: Chapter[];
  sandboxUrl: string;
};

export default function CourseClient({ chapters, sandboxUrl }: Props) {
  const { completed, completeChapter } = useProgress();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("course");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const current = chapters[activeIndex];

  return (
    <main className="layout">
      {/* ── Desktop : sandbox à gauche, contenu à droite ── */}
      <div className="layout-desktop">
        <Sandbox url={sandboxUrl} />
        <div className="layout-bottom">
          <Sidebar
            chapters={chapters}
            completed={completed}
            activeId={current.id}
            onComplete={completeChapter}
            onSelect={(id) => {
              const idx = chapters.findIndex((c) => c.id === id);
              if (idx !== -1) setActiveIndex(idx);
            }}
          />
          <section className="course">
            <CoursePanel
              chapter={current}
              index={activeIndex}
              total={chapters.length}
              isCompleted={completed.includes(current.id)}
              onComplete={() => completeChapter(current.id)}
              onPrev={() => setActiveIndex((i) => Math.max(0, i - 1))}
              onNext={() =>
                setActiveIndex((i) => Math.min(chapters.length - 1, i + 1))
              }
            />
          </section>
        </div>
      </div>

      {/* ── Mobile : onglets + drawer ── */}
      <div className="layout-mobile">
        {/* Barre supérieure */}
        <header className="mobile-topbar">
          <button
            className="mobile-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Ouvrir les chapitres"
          >
            ☰
          </button>
          <span className="mobile-title">{current.title}</span>
          <span className="mobile-badge">
            {activeIndex + 1} / {chapters.length}
          </span>
        </header>

        {/* Contenu de l'onglet actif */}
        <div className="mobile-content">
          {activeTab === "course" ? (
            <section className="course">
              <CoursePanel
                chapter={current}
                index={activeIndex}
                total={chapters.length}
                isCompleted={completed.includes(current.id)}
                onComplete={() => completeChapter(current.id)}
                onPrev={() => setActiveIndex((i) => Math.max(0, i - 1))}
                onNext={() =>
                  setActiveIndex((i) => Math.min(chapters.length - 1, i + 1))
                }
              />
            </section>
          ) : (
            <Sandbox url={sandboxUrl} />
          )}
        </div>

        {/* Barre d'onglets */}
        <nav className="mobile-tabs">
          <button
            className={`mobile-tab ${activeTab === "course" ? "active" : ""}`}
            onClick={() => setActiveTab("course")}
          >
            📖 Cours
          </button>
          <button
            className={`mobile-tab ${activeTab === "sandbox" ? "active" : ""}`}
            onClick={() => setActiveTab("sandbox")}
          >
            💻 Sandbox
          </button>
        </nav>

        {/* Drawer sidebar */}
        {drawerOpen && (
          <>
            <div
              className="mobile-overlay"
              onClick={() => setDrawerOpen(false)}
            />
            <aside className="mobile-drawer">
              <Sidebar
                chapters={chapters}
                completed={completed}
                activeId={current.id}
                onComplete={completeChapter}
                onSelect={(id) => {
                  const idx = chapters.findIndex((c) => c.id === id);
                  if (idx !== -1) {
                    setActiveIndex(idx);
                    setDrawerOpen(false);
                  }
                }}
              />
            </aside>
          </>
        )}
      </div>
    </main>
  );
}
