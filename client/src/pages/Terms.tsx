
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, Bell, DollarSign, LogIn, LogOut, HelpCircle, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <FileText className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Please read these terms carefully before using our services
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto space-y-8">

                {/* SMS Section Header */}
                <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">SMS Terms & Conditions</h2>
                    <p className="text-slate-600">Terms governing SMS communications from Nexus Auto Parts</p>
                </div>

                {/* SMS Consent */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            SMS Consent Communication
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-slate-600">
                            The information obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
                            <p className="text-green-800 font-medium">
                                SMS opt-in or phone numbers for SMS are not being shared with any third party and affiliate company for marketing purposes.
                            </p>
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
                            If you have consented to receive text messages from Nexus Auto parts, you may receive messages related to the following:
                        </p>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Enquiries regarding the part
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Follow-up messages regarding the order placed
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Tracking information
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Billing inquiries
                            </li>
                        </ul>
                        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-300">
                            <p className="text-slate-600 text-sm italic">
                                <strong>Example:</strong> "Hello, this is a friendly reminder regarding the Part you requested [Year: XYZ Make: XYZ Model: XYZ] with Nexus Auto Parts. Please call (866) 212-2276 for further help. Reply STOP to opt out of SMS messaging at any time."
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Message Frequency */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Info className="w-5 h-5 text-primary" />
                            Message Frequency
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-slate-600">
                            Message frequency may vary. You may receive up to <strong>5 SMS messages</strong> related to your order enquiry and order completion.
                        </p>
                    </CardContent>
                </Card>

                {/* Potential Fees */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <DollarSign className="w-5 h-5 text-primary" />
                            Potential Fees for SMS Messaging
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-slate-600">
                            Please note that standard message and data rates may apply, depending on your carrier's pricing plan. These fees may vary if the message is sent domestically or internationally.
                        </p>
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
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Verbally, during a conversation
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                By submitting an online form
                            </li>
                        </ul>
                        <p className="text-slate-500 text-sm">
                            If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.
                        </p>
                    </CardContent>
                </Card>

                {/* Opt-Out Method */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <LogOut className="w-5 h-5 text-primary" />
                            Opt-Out Method
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            You can opt out of receiving SMS messages at any time. To do so:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-lg text-center">
                                <p className="text-red-700 font-bold text-lg">Reply "STOP"</p>
                                <p className="text-red-600 text-sm">to any SMS message you receive</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <p className="text-blue-700 font-bold text-lg">Contact Us</p>
                                <p className="text-blue-600 text-sm">to request removal from our messaging list</p>
                            </div>
                        </div>
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
                    <CardContent className="p-6 space-y-4">
                        <p className="text-slate-600">
                            If you are experiencing any issues, you can reply with the keyword <strong>HELP</strong>. Or, you can get help directly from us at:
                        </p>
                        <a href="https://www.nexusautopartssupply.com" className="text-primary font-medium hover:underline block">
                            www.nexusautopartssupply.com
                        </a>
                    </CardContent>
                </Card>

                {/* Standard Messaging Disclosures */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardHeader className="border-b border-slate-700">
                        <CardTitle className="text-white">Standard Messaging Disclosures</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                        <p className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            Message and data rates may apply.
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            You can opt out at any time by texting "STOP."
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            For assistance, text "HELP" or visit our Privacy Policy and Terms and Conditions pages.
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            Message frequency may vary.
                        </p>
                    </CardContent>
                </Card>

            </main>

            <Footer />
        </div>
    );
}
