"use client";

import { useCallback, useEffect, useRef, useState } from "react"
import { Navigation } from "./Navigation"
import { GlassFloor, Loading, SectionContent, sectionNames } from "./Sections"

export function MafileShell() {
  
  const [section, setSection] = useState(0);
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState(true);
  const [locked, setLocked] = useState(false);
  const touchStart = useRef(0);

  const navigate = useCallback(
    (next: number) => {
      if (locked || next === section || next < 0 || next >= sectionNames.length)
        return;
      setLocked(true);
      setSection(next);
      window.setTimeout(() => setLocked(false), 700);
    },
    [locked, section],
  );

  const go = useCallback(() => {
    if (locked || loading) return;
    setLocked(true);
    setLoading(true);
    window.setTimeout(() => setLocked(false), 750);
  }, [loading, locked]);

  const back = useCallback(() => {
    if (locked) return;
    setLocked(true);
    setLoading(false);
    window.setTimeout(() => setLocked(false), 750);
  }, [locked]);

  const enterCinema = useCallback(() => {
    setIntro(false);
    window.setTimeout(
      () =>
        document.querySelector<HTMLElement>("[data-mafile-content]")?.focus(),
      700,
    );
  }, []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (loading || locked || Math.abs(event.deltaY) < 12) return;
      event.preventDefault();
      navigate(section + (event.deltaY > 0 ? 1 : -1));
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown")
        navigate(section + 1);
      if (event.key === "ArrowUp" || event.key === "PageUp")
        navigate(section - 1);
      if (event.key === "Home") navigate(0);
      if (event.key === "Escape" && loading) back();
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStart.current = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      const distance =
        (event.changedTouches[0]?.clientY ?? 0) - touchStart.current;
      if (Math.abs(distance) > 55) navigate(section + (distance < 0 ? 1 : -1));
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [back, loading, locked, navigate, section]);


  return (
    <main className="relative h-dvh overflow-hidden bg-background text-foreground">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"

      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="pointer-events-none absolute inset-0 bg-background/75"
        aria-hidden="true"
      />
      <GlassFloor />
      <Navigation
        section={loading ? 0 : section}
        onNavigate={navigate}
        onLogo={() => navigate(0)}
      />
      <div
        data-mafile-content
        tabIndex={-1}
        className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,.8,.2,1)] ${loading ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div
          key={section}
          className="h-full animate-in fade-in slide-in-from-bottom-6 duration-700"
          aria-live="polite"
        >
          <SectionContent
            section={section}
            onGo={go}
            onReturn={() => navigate(0)}
          />
        </div>
      </div>
      <div
        className={`absolute inset-0 translate-x-full transition-transform duration-700 ease-[cubic-bezier(.22,.8,.2,1)] ${loading ? "!translate-x-0" : ""}`}
        aria-hidden={!loading}
      >
        <Loading onBack={back} />
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.28em] text-foreground/35 sm:right-10">
        Scroll to explore
      </div>
      <div className="sr-only" aria-live="polite">
        {loading ? "Loading next experience" : sectionNames[section]}
      </div>
      <div
        className={`fixed inset-0 z-50 flex items-end justify-between overflow-hidden bg-[#11100e] px-6 pb-8 text-[#f4f0e8] transition-transform duration-1000 ease-[cubic-bezier(.76,0,.24,1)] sm:px-12 sm:pb-12 ${intro ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!intro}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          playsInline
          onEnded={enterCinema}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,transparent_0%,rgba(17,16,14,.3)_42%,rgba(17,16,14,.92)_100%)]" />
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.42em] text-white/55">
            Mafile presents
          </p>
          <h1 className="font-serif text-5xl leading-[.9] tracking-[-0.06em] sm:text-8xl">
            A study in
            <br />
            motion.
          </h1>
        </div>
        <button
          type="button"
          onClick={enterCinema}
          className="relative z-10 border border-white/35 px-5 py-3 text-[10px] uppercase tracking-[0.28em] transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Enter cinema
        </button>
      </div>
    </main>
  );
}
