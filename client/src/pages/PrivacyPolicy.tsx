
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Database, Share2, Users, Shield, BarChart3, UserCheck, RefreshCw, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <Lock className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Nexus Auto Parts LLC values your privacy and is committed to protecting your personal information
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto space-y-8">

                <p className="text-slate-600 text-center max-w-3xl mx-auto">
                    This Privacy Policy explains how we collect, use, protect, and share information when you interact with our website, request parts, or place an order with us.
                </p>

                {/* Information We Collect */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Database className="w-5 h-5 text-primary" />
                            Information We Collect
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            When you request a part, place an order, or communicate with Nexus Auto Parts LLC, we may collect the following information:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                "Full name",
                                "Phone number",
                                "Email address",
                                "Billing and shipping information",
                                "Vehicle and part-related details",
                                "Any additional information you voluntarily provide"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-600">
                                    <span className="text-primary">•</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            We collect only the information necessary to process requests and deliver our services efficiently.
                        </p>
                    </CardContent>
                </Card>

                {/* How We Use Your Information */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            How We Use Your Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            Your information is used strictly for business-related purposes, including but not limited to:
                        </p>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Locating and confirming requested auto or truck parts
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Notifying you about part availability, pricing, or order status
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Arranging shipping and delivery
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Addressing scheduling, timing, or fulfillment concerns
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Providing customer support and resolving disputes
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Fulfilling legal, accounting, and fraud-prevention requirements
                            </li>
                        </ul>
                        <p className="text-slate-700 font-medium">
                            We do not use your information for unrelated or unauthorized purposes.
                        </p>
                    </CardContent>
                </Card>

                {/* Data Ownership & Sharing */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Share2 className="w-5 h-5 text-primary" />
                            Data Ownership & Sharing
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Nexus Auto Parts LLC owns and controls the information you provide to us
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                We do not sell, rent, or trade personal data to third parties
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Information is shared only when necessary to complete a transaction (e.g., shipping carriers, payment processors, or service providers)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                If you participate in a contest, giveaway, or promotion, we may request limited contact details solely for prize fulfillment
                            </li>
                        </ul>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                            <p className="text-green-800 font-medium">
                                SMS consent and phone numbers are never shared with third parties or affiliates for marketing purposes.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Access to Information */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary" />
                            Access to Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Only authorized Nexus Auto Parts LLC personnel have access to personal data
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Access is limited to employees who require the information to perform their job functions
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Staff are required to follow internal data protection and confidentiality standards
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Security Measures */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-primary" />
                            Security Measures
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            We take reasonable and industry-standard precautions to protect your information, including:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                "Confirmation emails to verify order accuracy",
                                "Secure and timely order processing",
                                "Encryption protocols to protect personal and payment information",
                                "128-bit SSL encryption for payment security",
                                "Billing verification and shipment to verified addresses only",
                                "Fraud-prevention and transaction monitoring procedures"
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-3 rounded-lg text-slate-600 text-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            While no system is 100% secure, we continuously work to maintain strong safeguards against unauthorized access or misuse.
                        </p>
                    </CardContent>
                </Card>

                {/* Use of Anonymous Data */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            Use of Anonymous Data
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">We may collect and analyze anonymous, non-identifiable data to:</p>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Improve website performance
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Enhance user experience
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Understand traffic patterns and customer behavior
                            </li>
                        </ul>
                        <p className="text-slate-500 text-sm">
                            This data cannot be used to identify individual users.
                        </p>
                    </CardContent>
                </Card>

                {/* Your Rights */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <UserCheck className="w-5 h-5 text-primary" />
                            Your Rights
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">You have the right to:</p>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Request access to the personal information we hold about you
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Request corrections to inaccurate or outdated information
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Ask questions about how your data is used
                            </li>
                        </ul>
                        <p className="text-slate-500 text-sm">
                            Requests may be submitted through our customer support contact channels.
                        </p>
                    </CardContent>
                </Card>

                {/* Policy Updates */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 text-primary" />
                            Privacy Policy Updates
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            Nexus Auto Parts LLC may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes.
                        </p>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                All updates will be posted on this page
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Continued use of our website or services indicates acceptance of the revised policy
                            </li>
                        </ul>
                        <p className="text-slate-500 text-sm italic">
                            We encourage you to review this policy periodically to stay informed.
                        </p>
                    </CardContent>
                </Card>

                {/* Contact */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardContent className="p-6 text-center">
                        <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                        <p className="mb-2">
                            If you have questions or concerns regarding this Privacy Policy or your personal information, please contact Nexus Auto Parts LLC through our official communication channels.
                        </p>
                        <a href="tel:8663171665" className="text-xl font-bold text-primary hover:underline">
                            866-317-1665
                        </a>
                    </CardContent>
                </Card>

            </main>

            <Footer />
        </div>
    );
}
