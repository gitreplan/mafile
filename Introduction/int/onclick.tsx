import { lucide_icon } from "@gitreplan/jstemplates_ipipaths/lib/part";
import { ChevronDown } from "lucide-react";
const glass =
    "border border-white/25 bg-white/12 shadow-[0_18px_60px_rgba(17,24,39,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/20";

function Button({self: { self, press }, meta, data, planed}) {
    const {
        type,
        title,
        label,
        icon,
        _cls,
        image,
        url,
        description,
        summary,
        kids,
        order,
    } = meta;

    const {
        bag: {
            menu_open,
            section,
            loading
        },
        set,
    } = planed;

    const Icon = lucide_icon[icon];
    switch (type) {
        case "company":
            return (
                <button
                    onClick={(e) => press({ e, id: "onclick", meta, data })}
                    className={`${glass} group flex items-center justify-between rounded-3xl p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4`}
                >
                    <div>
                        <h1 className="font-serif text-2xl">{title}</h1>
                        <div className="mt-1 max-w-xs text-sm text-foreground/60">
                            {description}
                        </div>
                        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                            {url}
                        </p>
                    </div>
                    {Icon && (
                        <Icon className="size-5 text-foreground/45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                </button>
            );
        case "category":
            return (
                <button
                    onClick={(e) => press({ e, id: "onclick", meta, data })}
                    className={`${glass} group overflow-hidden rounded-3xl text-left focus-visible:outline-2 focus-visible:outline-offset-4`}
                >
                    <img
                        src={image?.url}
                        className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
                    />
                    <div className="p-5">
                        <p className="font-serif text-2xl">{title}</p>
                        <p className="mt-2 text-sm text-foreground/60">{description}</p>
                    </div>
                </button>
            );
        case "arrow":
            return (
                <button
                    onClick={(e) => planed.set.setLoading(true)}
                    className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/35 pb-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-8"
                >
                    {Icon && <Icon />}
                    {label}
                </button>
            );
        case "menu":
            return (
                <div className="relative">
                    <button
                        onClick={() => set.set_menu_open(!menu_open)}
                        className="flex items-center gap-2 rounded-full border border-foreground/20 bg-background/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-xl transition hover:bg-background/50 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        {label}{" "}
                        <ChevronDown
                            className={`size-3 transition-transform ${menu_open ? "rotate-180" : ""}`}
                        />
                    </button>
                    {menu_open && (
                        <div
                            className="absolute right-0 top-12 min-w-40 overflow-hidden rounded-2xl border border-foreground/15 bg-background/75 p-1.5 shadow-xl backdrop-blur-2xl"
                        >
                            {kids?.map((name, index) => (
                                <button
                                    key={index}
                                    onClick={() => select(index)}
                                    className={`block w-full rounded-xl px-3 py-2.5 text-left text-[10px] font-semibold tracking-[0.18em] transition hover:bg-foreground/10 ${index === section ? "bg-foreground/10" : ""}`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            );
    };
    return (
        <button
            className={_cls}
            onClick={(e) => press({ e, id: "onclick", meta, data })}
        >
            {Icon && <Icon />}
            {label}
        </button>
    );
}



export {Button};
