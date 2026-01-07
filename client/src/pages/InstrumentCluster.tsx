
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Truck, Shield, Award, Phone, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function InstrumentCluster() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden py-16 md:py-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80")',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                <div className="relative w-full px-4 z-10 text-center text-white space-y-4 md:space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg px-2">
                        Instrument Clusters<br />
                        <span className="text-primary-foreground">Plug-In Accuracy</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed px-4">
                        No dead pixels. No mileage fraud games. Exact OEM units only.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 px-4">
                        <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-6 md:px-8 py-2 md:py-3 h-auto rounded-lg shadow-lg w-full sm:w-auto">
                            <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                            (866) 212-2276
                        </Button>
                        <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-sm md:text-base px-6 md:px-8 py-2 md:py-3 h-auto rounded-lg backdrop-blur-sm w-full sm:w-auto">
                            <Search className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                            Check Availability
                        </Button>
                    </div>
                </div>
            </section>

            <main className="w-full px-4 py-8 lg:py-16 lg:-mt-20 relative z-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

                    {/* Sidebar - Shows first on mobile */}
                    <div className="lg:col-span-1 lg:order-2">
                        <div className="lg:sticky lg:top-28 space-y-4 lg:space-y-6">
                            <Card className="border-none shadow-2xl bg-slate-900 text-white overflow-hidden">
                                <CardHeader className="p-4 lg:p-6">
                                    <CardTitle className="text-xl lg:text-2xl">Get an Instant Quote</CardTitle>
                                    <CardDescription className="text-slate-300 text-sm lg:text-base">
                                        Speak with a Parts Specialist now.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 lg:p-6 pt-0 space-y-3 lg:space-y-4">
                                    <div className="space-y-1 lg:space-y-2">
                                        <label className="text-xs lg:text-sm font-medium text-slate-300">Vehicle Year</label>
                                        <Input placeholder="e.g., 2018" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-9 lg:h-10 text-sm" />
                                    </div>
                                    <div className="space-y-1 lg:space-y-2">
                                        <label className="text-xs lg:text-sm font-medium text-slate-300">Make & Model</label>
                                        <Input placeholder="e.g., Ford F-150" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-9 lg:h-10 text-sm" />
                                    </div>
                                    <div className="space-y-1 lg:space-y-2">
                                        <label className="text-xs lg:text-sm font-medium text-slate-300">Your Phone</label>
                                        <Input placeholder="(555) 123-4567" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-9 lg:h-10 text-sm" />
                                    </div>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm lg:text-base py-2.5 lg:py-3 font-bold shadow-lg rounded-lg">
                                        Check Price & Availability
                                    </Button>
                                    <p className="text-[10px] lg:text-xs text-center text-slate-400">
                                        By submitting, you agree to receive calls/texts.
                                    </p>
                                </CardContent>
                            </Card>

                            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-slate-100 text-center">
                                <h4 className="font-bold text-slate-900 mb-1 lg:mb-2 text-sm lg:text-base">Need Help Identifying?</h4>
                                <p className="text-xs lg:text-sm text-slate-500 mb-2 lg:mb-4">Our ASE Certified pros can help you find the exact cluster match.</p>
                                <a href="tel:8662122276" className="text-primary font-bold text-lg lg:text-xl hover:underline">
                                    (866) 212-2276
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Column */}
                    <div className="lg:col-span-2 lg:order-1 space-y-6 lg:space-y-8">
                        {/* Value Proposition Card */}
                        <Card className="border-none shadow-2xl bg-white overflow-hidden">
                            <CardContent className="p-4 sm:p-6 lg:p-10">
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <div className="flex items-center gap-3 lg:gap-4">
                                        <div className="bg-primary/10 p-2 lg:p-3 rounded-xl shrink-0">
                                            <Award className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                                        </div>
                                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
                                            Why Buy Instrument Clusters from Nexus?
                                        </h2>
                                    </div>
                                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                                        Our instrument clusters are tested for display clarity, gauge response, and warning indicators. We ensure you get exact OEM units that plug in without issues.
                                    </p>
                                    <h3 className="text-base lg:text-xl font-bold text-slate-800">Why Buy Our Instrument Clusters</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                                        {[
                                            "Fully tested gauges & displays",
                                            "OEM connectors, no rewiring",
                                            "VIN-verified compatibility",
                                            "Secure anti-static packaging",
                                            "Warranty available"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-slate-700 text-sm lg:text-base">
                                                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4">
                                    <div className="bg-blue-100 p-2 lg:p-3 rounded-full text-blue-600 shrink-0">
                                        <Truck className="w-5 h-5 lg:w-6 lg:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm lg:text-lg">Free Nationwide Shipping</h3>
                                        <p className="text-xs lg:text-sm text-slate-500">Securely palletized & insured</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-4 lg:p-6 flex items-center gap-3 lg:gap-4">
                                    <div className="bg-amber-100 p-2 lg:p-3 rounded-full text-amber-600 shrink-0">
                                        <Shield className="w-5 h-5 lg:w-6 lg:h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm lg:text-lg">90-Day Warranty</h3>
                                        <p className="text-xs lg:text-sm text-slate-500">Standard coverage included</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Comparison Table */}
                        <Card className="border-none shadow-lg overflow-hidden">
                            <CardHeader className="bg-slate-50 border-b p-4 lg:p-6">
                                <CardTitle className="text-base lg:text-xl">Why Choose Nexus OEM Used?</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 overflow-x-auto">
                                <table className="w-full text-xs lg:text-sm text-left whitespace-nowrap">
                                    <thead className="bg-slate-100 text-slate-700 uppercase font-semibold">
                                        <tr>
                                            <th className="px-3 lg:px-6 py-2 lg:py-3">Feature</th>
                                            <th className="px-3 lg:px-6 py-2 lg:py-3 text-primary">Nexus OEM</th>
                                            <th className="px-3 lg:px-6 py-2 lg:py-3">Dealer New</th>
                                            <th className="px-3 lg:px-6 py-2 lg:py-3">Aftermarket</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="bg-white">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">OEM Fit & Quality</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">❌ Varies</td>
                                        </tr>
                                        <tr className="bg-slate-50/50">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">Tested Before Ship</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">❌ No</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-amber-500">⚠️ Limited</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">Warranty Options</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-amber-500">⚠️ Limited</td>
                                        </tr>
                                        <tr className="bg-slate-50/50">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">Cost Savings</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">50–70%</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">0%</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-amber-500">30–50%</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">Installation Support</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">✅ Yes</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">❌ No</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">❌ No</td>
                                        </tr>
                                        <tr className="bg-slate-50/50">
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 font-medium">Environmental Impact</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-green-600 font-bold">Low</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-red-500">High</td>
                                            <td className="px-3 lg:px-6 py-2 lg:py-4 text-amber-500">Medium</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
