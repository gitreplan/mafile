import { useEffect, useRef, useState } from "react";
import { ChevronDown, Info, RotateCcw, X } from "lucide-react";
import type { AuthMode } from "../auth-flow/types";

export function AuthTools({
  onReset,
  onSwitchMode,
}: {
  onReset: () => void;
  onSwitchMode: (mode: AuthMode) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!instructionsOpen) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setInstructionsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [instructionsOpen]);

  function switchMode(mode: AuthMode) {
    setIsOpen(false);
    onSwitchMode(mode);
  }

  function reset() {
    setIsOpen(false);
    onReset();
  }

  return (
    <>
      <header className="flex items-center justify-end">
        <div className="relative">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="auth-tools-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
          >
            Tools
            <ChevronDown
              size={15}
              className={isOpen ? "rotate-180 transition" : "transition"}
            />
          </button>
          {isOpen && (
            <div
              id="auth-tools-menu"
              aria-label="Authentication tools"
              className="absolute right-0 z-20 mt-2 w-48 rounded-2xl border border-black/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#242426]"
            >
              <div className="px-3 pb-2 pt-2 text-[10px] font-bold tracking-[.18em] text-zinc-400">
                MODE
              </div>
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => switchMode("sign")}
                className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                Sign up
              </button>
              <div className="my-2 border-t border-black/5 dark:border-white/10" />
              <button
                type="button"
                onClick={reset}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                <RotateCcw size={14} /> Start over
              </button>
              <button
                type="button"
                onClick={() => {
                  setInstructionsOpen(true);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                <Info size={14} /> Instructions
              </button>
            </div>
          )}
        </div>
      </header>
      {instructionsOpen && (
        <div
          role="presentation"
          className="fixed inset-0 z-30 grid place-items-center bg-black/20 p-5 backdrop-blur-sm"
          onClick={() => setInstructionsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-instructions-title"
            className="w-full max-w-sm rounded-3xl bg-white p-7 shadow-2xl dark:bg-[#242426]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[.18em] text-zinc-400">
                  A QUICK NOTE
                </p>
                <h2
                  id="auth-instructions-title"
                  className="mt-2 text-2xl font-medium tracking-tight"
                >
                  How this works
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close instructions"
                onClick={() => setInstructionsOpen(false)}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              <li>
                <b className="text-zinc-800 dark:text-white">Next / Back</b>{" "}
                move one focused step at a time.
              </li>
              <li>
                <b className="text-zinc-800 dark:text-white">Swipe</b> right to
                continue or left to return.
              </li>
              <li>
                <b className="text-zinc-800 dark:text-white">Required fields</b>{" "}
                keep you here until they’re valid.
              </li>
              <li>
                <b className="text-zinc-800 dark:text-white">Optional fields</b>{" "}
                ask you to confirm before skipping.
              </li>
            </ul>
          </section>
        </div>
      )}
    </>
  );
}