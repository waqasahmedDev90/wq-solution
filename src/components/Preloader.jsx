import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
            setTimeout(() => {
                document.querySelector(".preloader")?.classList.add("loaded");
            }, 600);
        };

        // Listen to both DOMContentLoaded and load events
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("DOMContentLoaded", handleLoad);
            window.addEventListener("load", handleLoad);
        }

        // Timeout fallback (e.g., max 5 seconds)
        const timeout = setTimeout(handleLoad, 5000);

        return () => {
            window.removeEventListener("DOMContentLoaded", handleLoad);
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div id="preloader" className={`preloader ${isLoaded ? "loaded d-none" : ""}`}>
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="T" className="letters-loading">T</span>
                    <span data-text-preloader="E" className="letters-loading">E</span>
                    <span data-text-preloader="C" className="letters-loading">C</span>
                    <span data-text-preloader="H" className="letters-loading">H</span>
                    <span data-text-preloader="E" className="letters-loading">E</span>
                    <span data-text-preloader="D" className="letters-loading">D</span>
                    <span data-text-preloader="G" className="letters-loading">G</span>
                    <span data-text-preloader="E" className="letters-loading">E</span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left"><div className="bg"></div></div>
                    <div className="col-3 loader-section section-left"><div className="bg"></div></div>
                    <div className="col-3 loader-section section-right"><div className="bg"></div></div>
                    <div className="col-3 loader-section section-right"><div className="bg"></div></div>
                </div>
            </div>
        </div>
    );
}
