import { meta, PIWay } from ".";

function Effect({

    self: { self, },
    planed,

}) {

    const { loading, section, current_section_key } = planed.bag;
    const ThisWay = self.Way;
    return (
        <main className="relative h-dvh overflow-hidden bg-background text-foreground">
            <ThisWay _="Bg" />
            <ThisWay _="GlassFloor" />
            
            <ThisWay _="Header" />

            <ThisWay
                _='ContentAnimate'
            >
                <ThisWay
                    _={current_section_key}
                />
            </ThisWay>
            <PIWay
                _='LoadingAnimate'
            >
                <ThisWay _="LoadingSection" />
            </PIWay>
            
            <div className="pointer-events-none absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.28em] text-foreground/35 sm:right-10">
                Scroll to explore
            </div>
            <div className="sr-only">
                {loading ? "Loading next experience" : meta.sections.kids[section]?.order}
            </div>
        </main>
    );
};

export default Effect;
