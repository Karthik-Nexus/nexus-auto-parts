
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Truck, Clock, Shield, Star, Award, Phone, PenTool, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const specs = [
  { label: "Condition", value: "Used, Tested" },
  { label: "Warranty", value: "30-90 Days (Standard), Extended Available" },
  { label: "Compatibility", value: "Checked by VIN" },
  { label: "Shipping", value: "Free Nationwide Shipping" },
  { label: "Quality", value: "OEM Grade A" },
  { label: "Support", value: "Live Expert Verification" },
];

export default function UsedEngine() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-slate-800">
      <Navigation />

      {/* Premium Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://www.primeautopartssupply.com/wp-content/uploads/2025/05/Frame-1.webp")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

        <div className="relative container mx-auto px-4 z-10 text-center text-white space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary-foreground backdrop-blur-md text-sm font-medium mb-2">
            Premium Auto Parts
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            High-Performance <span className="text-primary-foreground">Used Engines</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Verified low-mileage OEM engines, rigorously tested for compression and reliability.
            Save up to 70% vs buying new.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-primary hover:bg-primary/90 text-base px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <Phone className="mr-2 h-5 w-5" />
              (866) 212-2276
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-base px-8 py-6 h-auto rounded-full backdrop-blur-sm">
              <Search className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Value Proposition Card */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl hidden md:block">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Buy Used Engines from Nexus?</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      At Nexus Auto Parts, we don't just sell engines; we provide peace of mind. Every unit is pulled from low-mileage vehicles and undergoes a comprehensive <strong>multi-point inspection</strong> including compression testing, visual leak checks, and oil analysis. You get OEM quality at a fraction of the dealer cost.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Tested for Compression & Leaks",
                        "Cleaned & Palletized Securely",
                        "VIN Verification for Fitment",
                        "Dedicated Expert Support"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features/Icons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fast Free Shipping</h3>
                    <p className="text-sm text-slate-500">To commercial addresses</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">90-Day Warranty</h3>
                    <p className="text-sm text-slate-500">Standard coverage included</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Specs Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PenTool className="w-6 h-6 text-primary" />
                Technical Specifications
              </h3>
              <div className="divide-y">
                {specs.map((spec, i) => (
                  <div key={i} className="py-4 grid grid-cols-2">
                    <span className="font-medium text-slate-500">{spec.label}</span>
                    <span className="font-semibold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <Card className="border-none shadow-2xl bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <CardHeader>
                  <CardTitle className="text-2xl">Get an Instant Quote</CardTitle>
                  <CardDescription className="text-slate-300">
                    Speak with a Parts Specialist now.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Vehicle Year</label>
                    <Input placeholder="e.g., 2018" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Make & Model</label>
                    <Input placeholder="e.g., Ford F-150" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Phone</label>
                    <Input placeholder="(555) 123-4567" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6 font-bold shadow-lg mt-2">
                    Check Price & Availability
                  </Button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting, you agree to receive calls/texts about your inquiry. One of the best prices in the market guaranteed.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center">
                <h4 className="font-bold text-slate-900 mb-2">Need Help Identifying?</h4>
                <p className="text-sm text-slate-500 mb-4">Our ASE Certified pros can help you find the exact engine match.</p>
                <a href="tel:8662122276" className="text-primary font-bold text-xl hover:underline">
                  (866) 212-2276
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

