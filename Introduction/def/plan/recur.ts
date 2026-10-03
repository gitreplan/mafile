import { MagicMethods } from "@gitreplan/jsbuiltin_libraries";
import { useEffect } from "@gitreplan/jstemplates_ipipaths/lib/part";

function Recur(self, eff) {
    if(!MagicMethods.is_document()) {
        return 0;
    };

    const {
        bag: {
            loading,
            locked,
            touchStart,
            section,
        },
        navigate,
        back,
    } = this.script();



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


    return ()=> {
        
    }
};

export default Recur;