import { PIWay } from "../pi";

function ContentAnimate({
    self,

    planed: {
        bag: { loading, section },
    },
    children,
}) {
    return (
        <div
            data-mafile-content
            tabIndex={-1}
            className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,.8,.2,1)] ${loading ? "-translate-x-full" : "translate-x-0"}`}
        >
            <div
                className="h-full animate-in fade-in slide-in-from-bottom-6 duration-700"
                aria-live="polite"
            >
                {children}
            </div>
        </div>
    );
}

function LoadingAnimate({
    planed: {
        bag: { loading, section },
    },
    children,
}) {
    return (
        <div
            className={`absolute inset-0 translate-x-full transition-transform duration-700 ease-[cubic-bezier(.22,.8,.2,1)] ${loading ? "!translate-x-0" : ""}`}
            aria-hidden={!loading}
        >
            {children}
        </div>
    );
}
export { LoadingAnimate, ContentAnimate };
