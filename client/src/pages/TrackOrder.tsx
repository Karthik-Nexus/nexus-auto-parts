
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, Phone, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TrackOrder() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 overflow-x-hidden w-full max-w-full">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="relative w-full px-4 z-10 text-center text-white space-y-4">
                    <Package className="w-12 h-12 mx-auto text-primary" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Track Your Order
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Enter your order details to check the status of your shipment
                    </p>
                </div>
            </section>

            <main className="w-full px-4 py-12 lg:py-16 max-w-4xl mx-auto">

                {/* Tracking Form */}
                <Card className="border-none shadow-xl mb-8">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle className="flex items-center gap-3">
                            <Search className="w-5 h-5 text-primary" />
                            Track Your Shipment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Order Number or Tracking Number</label>
                                <Input
                                    placeholder="Enter your order number (e.g., ORD-123456) or tracking number"
                                    className="h-12 text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address (used for order)</label>
                                <Input
                                    type="email"
                                    placeholder="Enter the email address used for your order"
                                    className="h-12 text-base"
                                />
                            </div>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
                            <Search className="mr-2 h-5 w-5" />
                            Track Order
                        </Button>
                    </CardContent>
                </Card>

                {/* Order Status Steps */}
                <Card className="border-none shadow-lg mb-8">
                    <CardHeader className="border-b bg-slate-50">
                        <CardTitle>Understanding Your Order Status</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            {[
                                { icon: CheckCircle, title: "Order Confirmed", desc: "We've received your order and are processing it", color: "text-green-500" },
                                { icon: Package, title: "Preparing for Shipment", desc: "Your part is being inspected and securely packaged", color: "text-blue-500" },
                                { icon: Truck, title: "In Transit", desc: "Your order is on its way to you", color: "text-amber-500" },
                                { icon: MapPin, title: "Delivered", desc: "Your part has been delivered to the specified address", color: "text-primary" }
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className={`${step.color} shrink-0`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1 border-l-2 border-slate-200 pl-4 pb-4">
                                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                                        <p className="text-slate-600 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Shipping Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Typical Delivery Times</h3>
                                    <ul className="text-slate-600 text-sm space-y-1">
                                        <li>Standard Shipping: 5-7 business days</li>
                                        <li>Expedited Shipping: 2-3 business days</li>
                                        <li>Freight (Engines/Trans): 3-5 business days</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                                    <Truck className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Carrier Tracking</h3>
                                    <p className="text-slate-600 text-sm">
                                        Once your order ships, you'll receive a tracking number via email that you can use on the carrier's website for real-time updates.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Need Help */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardContent className="p-8 text-center">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4">Need Help With Your Order?</h3>
                        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                            If you have questions about your order status or need assistance, our team is ready to help.
                        </p>
                        <a href="tel:8662122276">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <Phone className="mr-2 h-5 w-5" />
                                Call (866) 212-2276
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    );
}
