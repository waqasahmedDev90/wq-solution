import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect} from "react";

import ctaBgImg from "@/assets/img/cta/cta-video.jpg";

export default function CtaVideoSectionOne() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="cta-video-section bg-cover" style={{backgroundImage: `url(${ctaBgImg})`}}>
            <a data-fancybox href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fas fa-play"></i>
            </a>
        </div>
    )
}