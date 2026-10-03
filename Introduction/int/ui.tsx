import { PIWay } from "../pi";
import {meta} from '.';


function Header({
    self,
    data,
}) {


    return (
        <header className="sticky left-0 top-0 z-30 flex justify-between px-3 py-4">
            {meta.root.kids.map((item, i)=> {
                return (
                    <self.Way
                        key={i}
                        _='Button'
                        food={{
                            meta: item,
                            data,
                        }}
                    />
                )
            })}
            <self.Way 
                _='Button'
                food={{
                    meta: meta.menu,
                    data,
                }}
            />
        </header>
    )
}; 

function SectionLabel({ section }: { section: number }) {
    return (
        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">
        0{section + 1} / 04
        </p>
    );
}


function GlassFloor() {
    return (
        <> 
            <div
                className="pointer-events-none absolute inset-0 bg-background/75"
                aria-hidden="true"
                />
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center opacity-25 grayscale dark:opacity-20"
            />
        </>
    );
}

function Bg({

}) {
  return (
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
    )
}


export {
    Header,
    SectionLabel,
    Bg,
    GlassFloor,
}