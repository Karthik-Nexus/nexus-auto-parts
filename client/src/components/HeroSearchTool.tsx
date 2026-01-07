import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { getMakes, getModels, getYears, getParts } from "@/data/vehicleData";

export default function HeroSearchTool() {
    const [vin, setVin] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedPart, setSelectedPart] = useState('');

    const years = useMemo(() => getYears(), []);
    const makes = useMemo(() => getMakes(), []);
    const models = useMemo(() => selectedMake ? getModels(selectedMake) : [], [selectedMake]);
    const parts = useMemo(() => getParts(), []);

    const handleMakeChange = (make: string) => {
        setSelectedMake(make);
        setSelectedModel(''); // Reset model when make changes
    };

    return (
        <div className="bg-primary/95 text-primary-foreground p-6 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-sm border border-primary-foreground/10">
            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Year</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="">Click here to Pick Year</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Make</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm"
                        value={selectedMake}
                        onChange={(e) => handleMakeChange(e.target.value)}
                    >
                        <option value="">Click here to Pick Make</option>
                        {makes.map(make => (
                            <option key={make} value={make}>{make}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Model</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        disabled={!selectedMake}
                    >
                        <option value="">{selectedMake ? 'Click here to Pick Model' : 'Select Make first'}</option>
                        {models.map(model => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">Pick Part</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm"
                        value={selectedPart}
                        onChange={(e) => setSelectedPart(e.target.value)}
                    >
                        <option value="">Click here to Pick Part</option>
                        {parts.map(part => (
                            <option key={part} value={part}>{part}</option>
                        ))}
                    </select>
                </div>

                {/* Optional VIN Input */}
                <div className="space-y-1.5">
                    <label className="text-sm font-medium ml-1 text-primary-foreground/90">
                        VIN Number <span className="text-xs font-normal opacity-70">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        value={vin}
                        onChange={(e) => setVin(e.target.value.toUpperCase())}
                        placeholder="Enter 17-character VIN"
                        maxLength={17}
                        className="flex h-10 w-full rounded-md border border-input bg-white text-slate-900 px-3 py-2 text-sm font-mono tracking-wider"
                    />
                </div>

                <Button className="w-full bg-black text-white hover:bg-black/80 font-bold h-12 text-base mt-2 rounded-full">
                    SEARCH
                </Button>
            </div>
        </div>
    );
}
