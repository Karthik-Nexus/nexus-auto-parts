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
        // Wrap in setTimeout to ensure the page component (e.g., ThankYou.tsx) has time to update document.title
        const handleRouteChange = setTimeout(() => {
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: "page_view",
                    page_path: location,
                    page_title: document.title,
                });
            }
        }, 100);

        return () => clearTimeout(handleRouteChange);
    }, [location]);

    return null;
}
