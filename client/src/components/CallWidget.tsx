import { Phone } from "lucide-react";

export default function CallWidget() {
    return (
        <a
            href="tel:8662122276"
            className="fixed bottom-[34px] left-[29px] w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg z-40 transition-all duration-300 hover:scale-110 hover:bg-green-700 border-4 border-white/20"
            title="Call us: (866) 212-2276"
        >
            <Phone className="w-7 h-7" />
        </a>
    );
}
