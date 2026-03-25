"use client";

import { useState } from "react";
import ResumeViewer from "./ResumeViewer";

const navLinks = [
  { label: "STORY", href: "#storyInfo" },
  { label: "TECH", href: "#techInfo" },
  { label: "WORKS", href: "#worksInfo" },
  { label: "CONTACT", href: "#contactInfo" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 md:py-8 bg-surface/70 backdrop-blur-xl z-50">
      <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
        RAI
      </div>

      <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-headline uppercase tracking-widest text-[0.75rem] text-on-surface/60 hover:text-primary-container transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Desktop resume button — rendered by ResumeViewer */}
      <div className="hidden md:block">
        <ResumeViewer />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-on-surface"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container/95 backdrop-blur-xl md:hidden flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline uppercase tracking-widest text-sm text-on-surface/60 hover:text-primary-container transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ResumeViewer />
        </div>
      )}
    </header>
  );
}
