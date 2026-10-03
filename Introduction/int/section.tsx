import {meta, PIWay} from '.';


function IndexSection({
  self: {
    self,
  },
  planed: {
    bag: {
      section
    }
  }
}) {
  return (
    <section
      className="flex h-full flex-col gap-3 items-center justify-center px-6 text-center"
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
      </div>
      <self.Way
          _="Button"
          food={{
              meta: {
                  label: "Go",
                  type: "arrow",
                  icon: "ArrowRight",
              },
          }}
      />
    </section>
  );
};

const glass =
  "border border-white/25 bg-white/12 shadow-[0_18px_60px_rgba(17,24,39,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/20";
  

function AboutSection({
  
}) {
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
        {meta.about.map((item, i) => (
          <article
            key={i}
            className={`${glass} rounded-3xl p-6 sm:p-8`}>
            <h1 className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              {item.title}
            </h1>
            <p className="mt-12 max-w-sm text-lg leading-7 text-foreground/80">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};



function CinemaSection({
  self: {
    self,
  },
  meta: current_meta,
  data,
}) {
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
    </section>
  );
};




function ShoppingSection({
  self: {
    self,
  }
}) { 
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
        {meta.categories.map((item, i) => (
          <self.Way 
            key={i}
            _='Button'
            food={{
                meta: item,
            }}
          />
        ))}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {meta.companies.map((item, i) => (
          <self.Way
            key={i}
            _='Button'
            food={{
              meta: item,
            }}
          />
        ))}
      </div>
    </section>
  );
};


function LoadingSection({
  self: {
    self,
  },
  data,
}) {
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
        <self.Way
          _='Button'
          food={{
            data,
            meta: {
              id: 'back_to_index',
              type: 'arrow',
              label: 'Back',
              icon: 'ArrowLeft',
            },
          }} />
      </div>
    </section>
  );
}


function Content({

}) {
  
};



export {
  IndexSection,
  AboutSection,
  CinemaSection,
  ShoppingSection,
  LoadingSection,
  Content,
}