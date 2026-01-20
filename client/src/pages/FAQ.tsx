
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, HelpCircle } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
    {
        question: "What types of parts do you sell?",
        answer: "We sell quality-tested OEM used auto and truck parts including engines, transmissions, steering columns, instrument clusters, ABS modules, transfer cases, turbochargers, differentials, axle shafts, and more. All parts are sourced from low-mileage, accident-free vehicles."
    },
    {
        question: "How do I know if a part will fit my vehicle?",
        answer: "We use VIN verification to ensure proper fitment. When you request a part, provide your vehicle's Year, Make, Model, and VIN. Our parts specialists will verify compatibility before shipping."
    },
    {
        question: "What warranty do you offer?",
        answer: "We offer warranty coverage on most parts. The warranty covers parts damaged during shipping, incorrect parts sent by us, and mechanical failure under normal operating conditions. Visit our Warranty page for full details."
    },
    {
        question: "How long does shipping take?",
        answer: "Most orders ship within 1-3 business days. Delivery times vary based on your location and the part's origin. You'll receive tracking information once your order ships."
    },
    {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free nationwide shipping on most orders. Large items like engines and transmissions are securely palletized and shipped via freight."
    },
    {
        question: "What is your return policy?",
        answer: "Items that have not been installed, altered, or modified may be eligible for return. All returns require a Return Merchandise Authorization (RMA). Contact us within 7 business days of discovering an issue."
    },
    {
        question: "How do I request a part quote?",
        answer: "You can request a quote by calling us at 866-317-1665, using the quote form on any product page, or using our live chat. Have your vehicle information ready for faster service."
    },
    {
        question: "Do you sell new parts?",
        answer: "We specialize in quality-tested OEM used parts. This allows us to offer 50-70% savings compared to new dealer parts while maintaining OEM reliability and fitment."
    },
    {
        question: "Can I track my order?",
        answer: "Yes! Once your order ships, you'll receive an email with tracking information. You can also contact our customer service team for order status updates."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and other secure payment methods."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently, we primarily serve customers within the United States. Contact us for international shipping inquiries."
    },
    {
        question: "What if I receive a defective part?",
        answer: "Contact us within 7 business days of discovering the defect. For mechanical or functional defects, a written diagnostic report from a certified mechanic may be required. We'll arrange a replacement or refund."
    }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-medium text-slate-900 pr-4">{question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <HelpCircle className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about our parts and services
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto">

                {/* FAQ List */}
                <Card className="border-none shadow-xl overflow-hidden">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </Card>

                {/* Still Have Questions */}
                <section className="mt-12">
                    <Card className="border-none shadow-lg bg-slate-900 text-white">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-xl lg:text-2xl font-bold mb-4">Still Have Questions?</h3>
                            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                                Our team is ready to help. Contact us for personalized assistance with your parts needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:8663171665">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call 866-317-1665
                                    </Button>
                                </a>
                                <a href="/contact">
                                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                        Contact Us
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <Footer />
        </div>
    );
}
