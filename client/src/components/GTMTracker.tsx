import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export default function GTMTracker() {
    const [location] = useLocation();

    useEffect(() => {
        // Push page_view event to dataLayer on route change
        if (window.dataLayer) {
            window.dataLayer.push({
                event: "page_view",
                page_path: location,
                page_title: document.title,
            });
        }
    }, [location]);

    return null;
}
