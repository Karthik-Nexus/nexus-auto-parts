import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Bell, DollarSign, LogIn, LogOut, HelpCircle, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SmsTerms() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <FileText className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        SMS Terms & Conditions
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Please read these terms carefully regarding our SMS communications
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto space-y-8">

                {/* Got Questions */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            Got Questions?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Call Us</p>
                                    <a href="tel:866-317-1665" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                                        866-317-1665
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                                    <a href="mailto:sales@nexusautopartsusa.com" className="text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                                        sales@nexusautopartsusa.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Types of Communications */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-primary" />
                            Types of SMS Communications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            If you have consented to receive text messages from Nexus Auto Parts, you may receive messages related to the following:
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {[
                                "Enquiries regarding the part",
                                "Follow-up messages regarding the order placed",
                                "Tracking information",
                                "Billing inquiries"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Opt-In Method */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <LogIn className="w-5 h-5 text-primary" />
                            Opt-In Method
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">You may opt-in to receive SMS messages from Nexus Auto Parts in the following ways:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="bg-primary/10 text-primary p-1 rounded">1</span>
                                <span className="text-slate-700">Verbally, during a conversation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-primary/10 text-primary p-1 rounded">2</span>
                                <span className="text-slate-700">By submitting an online form</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Help */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            Help
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-slate-600 mb-4">
                            If you are experiencing any issues, you can reply with the keyword <strong>HELP</strong>. Or, you can get help directly from us at our website:
                        </p>
                        <a href="https://www.nexusautopartsusa.com" className="text-primary font-medium hover:underline flex items-center gap-2">
                            www.nexusautopartsusa.com
                        </a>
                    </CardContent>
                </Card>

                {/* Additional Options (Opt-Out) */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <LogOut className="w-5 h-5 text-primary" />
                            Additional Options
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="bg-slate-50 border-l-4 border-slate-300 p-4 rounded-r-lg">
                            <p className="text-slate-700">
                                If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Standard Messaging Disclosures */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardHeader className="border-b border-slate-700">
                        <CardTitle className="flex items-center gap-3 text-white">
                            <DollarSign className="w-5 h-5 text-primary" />
                            Standard Messaging Disclosures
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Message and data rates may apply.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>You can opt out at any time by texting "STOP".</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>For assistance, text "HELP" or visit our Privacy Policy and Terms and Conditions pages.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Message frequency may vary.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

            </main>

            <Footer />
        </div>
    );
}
