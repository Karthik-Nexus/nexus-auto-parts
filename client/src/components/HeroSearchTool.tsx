import { Button } from "@/components/ui/button";

export default function HeroSearchTool() {
    return (
        <div className="bg-primary/95 text-primary-foreground p-6 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-sm border border-primary-foreground/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Select your vehicle</h3>

            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Year</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Click here to Pick Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Make</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Click here to Pick Make</option>
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Toyota">Toyota</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Model</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Click here to Pick Model</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Part</label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Click here to Pick Part</option>
                        <option value="Engine">Engine</option>
                        <option value="Transmission">Transmission</option>
                        <option value="Brands">Brands</option>
                    </select>
                </div>

                <Button className="w-full bg-black text-white hover:bg-black/80 font-bold h-12 text-base mt-2 rounded-full shadow-lg border-2 border-transparent hover:border-white/20 transition-all">
                    SEARCH
                </Button>
            </div>
        </div>
    );
}
