"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface ResumeViewerProps {
  pdfSrc?: string;
}

export default function ResumeViewer({ pdfSrc = "/CV.pdf" }: ResumeViewerProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="font-headline uppercase tracking-widest text-[0.75rem] text-primary-container border border-outline-variant px-4 py-2 hover:bg-primary-container hover:text-on-primary transition-all duration-300 cursor-pointer"
      >
        RESUME
      </button>

      {/* Modal overlay — portaled to body so it sits above everything */}
      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Centering wrapper with padding so clicking the padding area closes */}
          <div
            className="min-h-full flex items-start justify-center py-8 md:py-12 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            {/* Document container */}
            <div className="relative w-full max-w-4xl">
              {/* Close button — pinned top-right of document */}
              <button
                onClick={close}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-surface-container border border-outline-variant/40 text-on-surface/70 hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                aria-label="Close resume viewer"
              >
                <span className="material-symbols-outlined text-lg">
                  close
                </span>
              </button>

              {/* Download button */}
              <a
                href={pdfSrc}
                download
                className="absolute -top-3 -right-14 md:-top-4 md:-right-16 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-surface-container border border-outline-variant/40 text-primary-container hover:text-on-surface transition-colors"
                title="Download CV"
              >
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
              </a>

              {/* PDF via iframe */}
              <iframe
                src={`${pdfSrc}#toolbar=0&navpanes=0&view=FitH`}
                title="Resume PDF"
                className="w-full border-0 bg-white"
                style={{ height: "calc(100vw * 1.414)", maxHeight: "85vh" }}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
