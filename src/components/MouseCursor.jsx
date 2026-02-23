import {useEffect} from "react";

export default function MouseCursor() {
    useEffect(() => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (!cursorInner || !cursorOuter) return;

        let isHovering = false;

        const handleMouseMove = (event) => {
            if (!isHovering) {
                cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
            }
            cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        };

        const handleMouseEnter = () => {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
        };

        const handleMouseLeave = (event) => {
            if (
                event.target.tagName === "A" &&
                event.target.closest(".cursor-pointer")
            ) {
                return;
            }
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.querySelectorAll("a, .cursor-pointer").forEach((element) => {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });

        cursorInner.style.visibility = "visible";
        cursorOuter.style.visibility = "visible";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.querySelectorAll("a, .cursor-pointer").forEach((element) => {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>
        </>
    )
}