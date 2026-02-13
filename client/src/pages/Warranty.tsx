
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, AlertTriangle, Package, RefreshCw, Truck, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Warranty() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <Shield className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Warranty Information
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Our commitment to quality parts and customer satisfaction
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto space-y-8">

                {/* What the Warranty Covers */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            What the Warranty Covers
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Parts damaged during shipping
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Incorrect parts sent by Nexus Auto Parts LLC
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Mechanical failure of the covered component under normal operating conditions
                            </li>
                        </ul>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                            <p className="text-slate-700 font-medium">If a covered part is found defective:</p>
                            <ul className="mt-2 space-y-1 text-slate-600">
                                <li>• We will repair or replace the part when possible</li>
                                <li>• If a replacement is unavailable, a refund of the part purchase price will be issued</li>
                            </ul>
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            Shipping charges are non-refundable. Return shipping is the customer's responsibility.
                        </p>
                    </CardContent>
                </Card>

                {/* Warranty Requirements */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary" />
                            Warranty Requirements & Conditions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Parts must be installed within <strong>10 days</strong> of delivery
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Issues must be reported within <strong>7 business days</strong> of discovery
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Parts must remain unmodified and uninstalled for return eligibility
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Products returned after <strong>60 days</strong> from delivery are not eligible
                            </li>
                        </ul>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                            <p className="text-slate-700">
                                <AlertTriangle className="w-4 h-4 inline mr-2 text-amber-600" />
                                Items purchased for testing purposes or ordered incorrectly by the customer are not eligible for return or refund.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Verified Mechanic Report */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Settings className="w-5 h-5 text-primary" />
                            Verified Mechanic Report Requirement
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            For any claim involving a mechanical or functional defect, a written diagnostic report from a verified or certified mechanic is required.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="font-medium text-slate-700 mb-2">The report must:</p>
                            <ul className="space-y-1 text-slate-600">
                                <li>• Be on shop letterhead or official invoice</li>
                                <li>• Clearly describe the defect</li>
                                <li>• Confirm the failure is due to the part, not installation error</li>
                                <li>• Include shop name, contact details, and technician identification</li>
                            </ul>
                        </div>
                        <p className="text-red-600 font-medium">
                            Claims without a valid mechanic report may be denied.
                        </p>
                    </CardContent>
                </Card>

                {/* Return Policy & RMA */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 text-primary" />
                            Return Policy & RMA Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                            <p className="text-red-700 font-medium">
                                Items that have been installed, altered, modified, or used for testing are NOT eligible for return.
                            </p>
                            <p className="text-red-600 mt-2">
                                <strong>All returns require prior Return Merchandise Authorization (RMA).</strong><br />
                                Do NOT ship any item back without an approved RMA.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <p className="font-medium text-slate-700 mb-2">Once an RMA is issued:</p>
                                <ul className="space-y-1 text-slate-600 text-sm">
                                    <li>• Part must be returned within 7 business days</li>
                                    <li>• Return address provided with RMA</li>
                                    <li>• Customer must provide return tracking</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <p className="font-medium text-slate-700 mb-2">Returned items must:</p>
                                <ul className="space-y-1 text-slate-600 text-sm">
                                    <li>• Be the exact original item shipped</li>
                                    <li>• Be identifiable by unique markings</li>
                                    <li>• Be in same condition as shipped</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-slate-600 text-sm">
                            Returns that do not meet these conditions may be rejected or subject to a <strong>restocking fee of up to 30%</strong>.
                        </p>
                    </CardContent>
                </Card>

                {/* Inspection, Refunds & Replacements */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Package className="w-5 h-5 text-primary" />
                            Inspection, Refunds & Replacements
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">All returned items are inspected upon receipt.</p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                            <p className="font-medium text-slate-700">If approved:</p>
                            <ul className="mt-2 space-y-1 text-slate-600">
                                <li>• A replacement part will be shipped, or</li>
                                <li>• A refund of the part purchase price will be issued</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            Refunds are processed after inspection and accounting approval, typically within <strong>5–7 business days</strong>.
                        </p>
                    </CardContent>
                </Card>

                {/* Delivery Responsibility */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Truck className="w-5 h-5 text-primary" />
                            Delivery Responsibility
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            Nexus Auto Parts LLC is not responsible for shipments marked delivered by the carrier to the address provided but not received by the customer.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="font-medium text-slate-700 mb-2">Freight shipments:</p>
                            <ul className="space-y-1 text-slate-600">
                                <li>• Do not include lift-gate service unless requested</li>
                                <li>• May incur additional carrier charges</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Part-Specific Disclaimer */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Part-Specific Disclaimer
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            Certain parts carry limited or conditional coverage, including but not limited to:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                { part: "Engines", note: "Warranty applies to the long block only" },
                                { part: "Transmissions", note: "Guaranteed to shift; installation requirements must be followed" },
                                { part: "Electrical modules/computers", note: "One-time replacement only; may require programming" },
                                { part: "Body parts", note: "Cosmetic condition and color shade not guaranteed" },
                                { part: "Rebuildable units", note: "Sold as rebuildable only (short blocks, carburetors)" },
                                { part: "Fragile items", note: "Glass, roof panels sold as-is or region-limited" }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-3 rounded-lg">
                                    <p className="font-medium text-slate-700">{item.part}</p>
                                    <p className="text-sm text-slate-500">{item.note}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            Full part-specific terms are available upon request.
                        </p>
                    </CardContent>
                </Card>

                {/* Acceptance of Terms */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardContent className="p-6">
                        <p className="text-center">
                            By placing an order, signing an invoice, or providing electronic approval, the customer acknowledges and agrees to all warranty, return, and refund terms.
                        </p>
                    </CardContent>
                </Card>

            </main>

            <Footer />
        </div>
    );
}
