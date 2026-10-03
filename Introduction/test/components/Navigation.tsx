"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { sectionNames } from "./Sections";

export function Navigation({
  section,
  onNavigate,
  onLogo,
}: {
  section: number;
  onNavigate: (section: number) => void;
  onLogo: () => void;
}) {
  const [open, setOpen] = useState(false);
  const select = (index: number) => {
    setOpen(false);
    onNavigate(index);
  };
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between p-6 sm:p-10">
      <button
        onClick={onLogo}
        className="pointer-events-auto text-xl font-semibold tracking-[-0.06em] focus-visible:outline-2 focus-visible:outline-offset-8"
        aria-label="Return to Mafile index"
      >
        mafile<span className="text-foreground/35">.</span>
      </button>
      <div className="pointer-events-auto relative">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="flex items-center gap-2 rounded-full border border-foreground/20 bg-background/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-xl transition hover:bg-background/50 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {sectionNames[section]}{" "}
          <ChevronDown
            className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div
            role="listbox"
            aria-label="Choose a section"
            className="absolute right-0 top-12 min-w-40 overflow-hidden rounded-2xl border border-foreground/15 bg-background/75 p-1.5 shadow-xl backdrop-blur-2xl"
          >
            {sectionNames.map((name, index) => (
              <button
                key={name}
                role="option"
                aria-selected={index === section}
                onClick={() => select(index)}
                className={`block w-full rounded-xl px-3 py-2.5 text-left text-[10px] font-semibold tracking-[0.18em] transition hover:bg-foreground/10 ${index === section ? "bg-foreground/10" : ""}`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
