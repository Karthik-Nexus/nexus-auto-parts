import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useChatbot } from "@/context/ChatbotContext";

// Images from public folder or use placeholders
const categories = [
    {
        name: "Engine Parts",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600",
        startingPrice: 699,
        items: ["Engine Blocks", "Cylinder Heads", "Crankshafts", "Camshafts & More"],
        href: "/engine"
    },
    {
        name: "Transmission Parts",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600",
        startingPrice: 449,
        items: ["Automatic Transmissions", "Manual Transmissions", "Transfer Cases", "Torque Converters & More"],
        href: "/transmission"
    },
    {
        name: "Differential",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
        startingPrice: 299,
        items: ["Front Differentials", "Rear Differentials", "Differential Carriers", "Ring & Pinion & More"],
        href: "/differential"
    },
    {
        name: "Axle Assembly",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        startingPrice: 99,
        items: ["Front Axle Shafts", "Rear Axle Shafts", "CV Axles", "Axle Bearings & More"],
        href: "/axle-shaft"
    },
    {
        name: "Other Parts",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600",
        startingPrice: 49,
        items: ["Steering Columns", "Instrument Clusters", "ABS Modules", "Turbo Chargers & More"],
        href: "/products"
    }
];

export default function PartsCategoryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const { openChatbot } = useChatbot();

    // Auto-scroll every 4 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Scroll to current index
    useEffect(() => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.scrollWidth / categories.length;
            containerRef.current.scrollTo({
                left: scrollWidth * currentIndex,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % categories.length);
    };

    const handleRequestQuote = (e: React.MouseEvent) => {
        e.preventDefault();
        openChatbot();
    };

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Browse Parts by Category
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        We carry a wide range of quality used parts for all vehicle systems and components
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative w-full">
                    {/* Prev Button */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary text-white shadow-lg hidden md:flex items-center justify-center hover:bg-primary/90 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Slides Container */}
                    <div className="overflow-hidden mx-0 md:mx-12">
                        <div
                            ref={containerRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="min-w-[300px] sm:min-w-[350px] lg:min-w-[380px] flex-shrink-0 snap-start"
                                >
                                    <div className="bg-slate-900 rounded-xl overflow-hidden h-full shadow-lg group">
                                        {/* Image Section */}
                                        <div className="relative h-48">
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                            <div className="absolute bottom-0 left-0 p-6">
                                                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                                <p className="text-primary font-bold text-lg mt-1">
                                                    Starting at ${category.startingPrice}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6">
                                            <ul className="space-y-2 mb-6">
                                                {category.items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-gray-300">
                                                        <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <button
                                                onClick={handleRequestQuote}
                                                className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                                            >
                                                Request a Quote
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary text-white shadow-lg hidden md:flex items-center justify-center hover:bg-primary/90 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {categories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
