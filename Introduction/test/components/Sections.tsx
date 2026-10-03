import { ArrowUpRight, Play } from "lucide-react";

const glass =
  "border border-white/25 bg-white/12 shadow-[0_18px_60px_rgba(17,24,39,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/20";

export function IndexSection({ onGo }: { onGo: () => void }) {
  return (
    <section
      className="flex h-full items-center justify-center px-6 text-center"
      aria-labelledby="welcome-title"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.36em] text-foreground/55">
          Mafile Store / 001
        </p>
        <h1
          id="welcome-title"
          className="font-serif text-6xl tracking-[-0.06em] text-foreground sm:text-8xl lg:text-[10rem]"
        >
          Welcome
        </h1>
        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-foreground/65 sm:text-base">
          A considered collection of cinema, objects, and people shaping the
          Mafile point of view.
        </p>
        <button
          onClick={onGo}
          className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/35 pb-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-8"
        >
          Go{" "}
          <span className="text-lg font-normal transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

export function AboutSection() {
  const items = [
    [
      "01 / About Mafile",
      "A living index for considered culture — made for curious eyes and open calendars.",
    ],
    [
      "02 / What we offer",
      "Stories, objects, and quiet discoveries arranged with intention.",
    ],
    [
      "03 / The experience",
      "Move through a world where every frame, product, and detail has a point of view.",
    ],
    [
      "04 / Identity",
      "Soft edges. Clear ideas. A visual language that leaves room for your own interpretation.",
    ],
  ];
  return (
    <section
      className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10"
      aria-labelledby="about-title"
    >
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            02 / The point of view
          </p>
          <h2
            id="about-title"
            className="font-serif text-5xl tracking-[-0.05em] sm:text-7xl"
          >
            About us
          </h2>
        </div>
        <p className="hidden max-w-[13rem] text-right text-xs leading-5 text-foreground/55 sm:block">
          An edit of things worth making space for.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map(([title, copy]) => (
          <article key={title} className={`${glass} rounded-3xl p-6 sm:p-8`}>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              {title}
            </p>
            <p className="mt-12 max-w-sm text-lg leading-7 text-foreground/80">
              {copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CinemaSection() {
  return (
    <section
      className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10"
      aria-labelledby="cinema-title"
    >
      <div className="mb-7 flex items-end justify-between">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            03 / Moving images
          </p>
          <h2
            id="cinema-title"
            className="font-serif text-5xl tracking-[-0.05em] sm:text-7xl"
          >
            Cinema
          </h2>
        </div>
        <span className="text-xs text-foreground/50">A film by Mafile</span>
      </div>
      <div className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/20 bg-black shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85"
          alt="A cinematic theater interior"
          className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <button
          aria-label="Play Mafile cinema film"
          className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Play className="ml-1 size-5 fill-current" />
        </button>
        <p className="absolute bottom-5 left-6 max-w-xs text-sm leading-6 text-white/85 sm:left-8">
          An invitation to look a little longer.
        </p>
      </div>
    </section>
  );
}

export function ShoppingSection({ onReturn }: { onReturn: () => void }) {
  const categories = [
    [
      "Objects",
      "Small things with a long afterlife.",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    ],
    [
      "Editions",
      "Limited work, thoughtfully kept.",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",
    ],
  ];
  const companies = [
    ["Aesop", "A considered approach to daily rituals.", "aesop.com"],
    [
      "Noma Projects",
      "Ideas made tangible through food and form.",
      "nomaprojects.com",
    ],
  ];
  return (
    <section
      className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center overflow-y-auto px-6 py-24 sm:px-10"
      aria-labelledby="shopping-title"
    >
      <div className="mb-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-foreground/50">
          04 / Carefully selected
        </p>
        <h2
          id="shopping-title"
          className="font-serif text-5xl tracking-[-0.05em] sm:text-7xl"
        >
          Shopping
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map(([name, copy, image]) => (
          <button
            key={name}
            onClick={onReturn}
            className={`${glass} group overflow-hidden rounded-3xl text-left focus-visible:outline-2 focus-visible:outline-offset-4`}
          >
            <img
              src={image}
              alt={`${name} category`}
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
            />
            <div className="p-5">
              <p className="font-serif text-2xl">{name}</p>
              <p className="mt-2 text-sm text-foreground/60">{copy}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {companies.map(([name, copy, url]) => (
          <button
            key={name}
            onClick={onReturn}
            className={`${glass} group flex items-center justify-between rounded-3xl p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4`}
          >
            <div>
              <p className="font-serif text-2xl">{name}</p>
              <p className="mt-1 max-w-xs text-sm text-foreground/60">{copy}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                {url}
              </p>
            </div>
            <ArrowUpRight className="size-5 text-foreground/45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        ))}
      </div>
    </section>
  );
}

export function LoadingSection({ onBack }: { onBack: () => void }) {
  return (
    <section className="flex h-full items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85"
            alt="Abstract installation in a gallery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white backdrop-blur-[2px]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              Mafile / Next
            </p>
            <p className="mt-5 font-serif text-4xl tracking-[-0.04em] sm:text-6xl">
              Coming into focus
            </p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/65 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-8"
        >
          ← Back to index
        </button>
      </div>
    </section>
  );
}

export function SectionContent({
  section,
  onGo,
  onReturn,
}: {
  section: number;
  onGo: () => void;
  onReturn: () => void;
}) {
  if (section === 0) return <IndexSection onGo={onGo} />;
  if (section === 1) return <AboutSection />;
  if (section === 2) return <CinemaSection />;
  return <ShoppingSection onReturn={onReturn} />;
}

export const sectionNames = [
  "INDEX", 
  "ABOUT US", 
  "CINEMA", 
  "SHOPPING"
];

export function LoadingContent({ onBack }: { onBack: () => void }) {
  return <LoadingSection onBack={onBack} />;
}

export function GlassFloor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center opacity-25 grayscale dark:opacity-20"
    />
  );
}

export function SectionLabel({ section }: { section: number }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
      0{section + 1} / 04
    </p>
  );
}

export function IntroContent({
  section,
  onGo,
  onReturn,
}: {
  section: number;
  onGo: () => void;
  onReturn: () => void;
}) {
  return <SectionContent section={section} onGo={onGo} onReturn={onReturn} />;
}

export function LoadingExperience({ onBack }: { onBack: () => void }) {
  return <LoadingContent onBack={onBack} />;
}

export function Content({
  section,
  onGo,
  onReturn,
}: {
  section: number;
  onGo: () => void;
  onReturn: () => void;
}) {
  return <IntroContent section={section} onGo={onGo} onReturn={onReturn} />;
}

export function Loading({ onBack }: { onBack: () => void }) {
  return <LoadingExperience onBack={onBack} />;
}

export function Sections({
  section,
  loading,
  onGo,
  onReturn,
  onBack,
}: {
  section: number;
  loading: boolean;
  onGo: () => void;
  onReturn: () => void;
  onBack: () => void;
}) {
  return loading ? (
    <Loading onBack={onBack} />
  ) : (
    <Content section={section} onGo={onGo} onReturn={onReturn} />
  );
}
