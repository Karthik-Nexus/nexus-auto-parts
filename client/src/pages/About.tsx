
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Shield, Leaf, Heart, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden py-16 md:py-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80")',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

                <div className="relative w-full px-4 z-10 text-center text-white space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
                        About Nexus Auto Parts LLC
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed px-4">
                        Simple. Reliable. Stress-Free.
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-20 max-w-5xl mx-auto">
                {/* Intro Section */}
                <section className="mb-12 lg:mb-16">
                    <Card className="border-none shadow-xl bg-white overflow-hidden">
                        <CardContent className="p-6 sm:p-8 lg:p-12">
                            <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
                                At Nexus Auto Parts LLC, we make buying used auto and truck parts simple, reliable, and stress-free.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                With over <strong className="text-primary">17 years</strong> in the auto parts industry, we've helped thousands of customers find quality-tested OEM parts at prices that make sense. Whether you're replacing an engine, transmission, or a hard-to-find component, our goal is to get you the right part the first time—without the dealership markup.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We understand that buying used parts can feel risky, which is why every component we sell undergoes careful sourcing and inspection. From engines and transmissions to steering columns and ABS modules, each part is checked for proper fitment, leaks, damage, and overall functionality.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* What You Can Expect */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-xl">
                            <Check className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">What You Can Expect From Us</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We take the guesswork out of used parts. Every component we sell is carefully sourced and inspected to meet our high-quality standards before it ships.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                                {[
                                    "VIN verification to ensure proper fitment",
                                    "Visual inspection for damage or leaks",
                                    "Secure packaging and reliable shipping",
                                    "Friendly support from experienced parts specialists"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 mt-6 italic">
                                If something doesn't look right, we address it—no runaround.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Who We Serve */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 p-3 rounded-xl">
                            <Users className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Who We Serve</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed mb-6">We work with:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                {[
                                    "Auto repair shops",
                                    "Professional installers",
                                    "Dealerships",
                                    "Everyday vehicle owners"
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-lg text-center">
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600">
                                Whether you're a professional or a first-time buyer, we treat every order with the same care and attention.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Quality & Pricing */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-amber-100 p-3 rounded-xl">
                            <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-amber-600" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Quality Parts. Fair Prices.</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Buying used shouldn't feel risky. With 17 years of experience, we know how to source dependable OEM components that deliver real value.
                            </p>
                            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                                <p className="text-slate-800 font-medium">
                                    Our customers save <span className="text-primary font-bold">50–70%</span> compared to new dealer parts—without sacrificing reliability.
                                </p>
                            </div>
                            <p className="text-slate-600 mt-4">
                                We don't do hidden fees or misleading listings—what you see is what you get.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Support */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-100 p-3 rounded-xl">
                            <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Support You Can Count On</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Our team is here to help before and after your purchase. If you have questions about fitment, shipping, or installation requirements, we're happy to walk you through it.
                            </p>
                            <p className="text-slate-700 font-medium italic">
                                We believe good service doesn't end when the part ships.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Sustainability */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                            <Leaf className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Responsible & Sustainable</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed">
                                By reusing quality OEM parts, we help reduce waste and support more sustainable vehicle repairs—good for your budget and better for the environment.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Our Commitment */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-purple-100 p-3 rounded-xl">
                            <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Our Commitment</h2>
                    </div>
                    <Card className="border-none shadow-lg bg-white">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-slate-600 leading-relaxed mb-6">
                                For over 17 years, Nexus Auto Parts LLC has been committed to:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {[
                                    "Accuracy and transparency",
                                    "Reliable parts you can trust",
                                    "Clear policies and honest support"
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-lg text-center">
                                        <Check className="w-5 h-5 text-primary mx-auto mb-2" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600">
                                We're here to make sure your repair goes as smoothly as possible.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Final CTA */}
                <section className="text-center">
                    <Card className="border-none shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                        <CardContent className="p-8 lg:p-12">
                            <p className="text-lg lg:text-xl leading-relaxed mb-4">
                                When you buy from Nexus Auto Parts LLC, you're not just getting a part—you're getting <strong>experience</strong>, <strong>transparency</strong>, and <strong>peace of mind</strong>.
                            </p>
                            <a href="tel:8663171665" className="inline-block mt-4 text-2xl font-bold text-primary hover:underline">
                                866-317-1665
                            </a>
                        </CardContent>
                    </Card>
                </section>
            </main>

            <Footer />
        </div>
    );
}
