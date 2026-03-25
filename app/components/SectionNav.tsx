"use client";

import { useEffect, useState } from "react";

const sections = ["home", "storyInfo", "worksInfo", "contactInfo"];

export default function SectionNav() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target.id);
            if (idx !== -1) setCurrent(idx);
          }
        }
      },
      { threshold: 0.3 },
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const isFirst = current === 0;
  const isLast = current === sections.length - 1;

  const scrollTo = (index: number) => {
    const el = document.getElementById(sections[index]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-8 md:bottom-12 left-0 w-full z-50 flex justify-center gap-4 md:gap-16 px-4 pointer-events-none">
      <div className="flex gap-4 md:gap-16 pointer-events-auto">
        {/* BACK button */}
        <button
          onClick={() => !isFirst && scrollTo(current - 1)}
          className={`px-6 md:px-8 py-3 md:py-4 font-headline font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 transition-all duration-300 border ${
            isFirst
              ? "bg-transparent border-outline-variant/30 text-outline-variant/40 cursor-default"
              : "bg-surface-container-high border-outline-variant/50 text-primary-container hover:bg-primary-fixed-dim hover:text-on-primary hover:border-primary-fixed-dim hover:translate-y-[-2px] active:scale-95"
          }`}
        >
          <span className="material-symbols-outlined text-xs">
            arrow_back_ios
          </span>
          BACK
        </button>

        {/* NEXT button */}
        <button
          onClick={() => !isLast && scrollTo(current + 1)}
          className={`px-6 md:px-8 py-3 md:py-4 font-headline font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 transition-all duration-300 border ${
            isLast
              ? "bg-transparent border-outline-variant/30 text-outline-variant/40 cursor-default"
              : "bg-primary-container border-primary-container text-on-primary hover:bg-primary-fixed-dim hover:border-primary-fixed-dim hover:translate-y-[-2px] active:scale-95"
          }`}
        >
          NEXT
          <span className="material-symbols-outlined text-xs">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </nav>
  );
}
