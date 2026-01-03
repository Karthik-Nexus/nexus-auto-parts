import { Card, CardContent } from '@/components/ui/card';
import {
  ShieldCheck,
  Award,
  Clock,
  Headphones,
} from 'lucide-react';

const standards = [
  {
    icon: ShieldCheck,
    title: '30-90 Days Warranty',
    description: 'Enjoy 30 to 90 days warranty on all parts (T&C apply).',
    highlight: true,
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is available around the clock to assist you.',
    highlight: false,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Mon-Fri: 9AM-6PM EST | Sat: 10AM-4PM EST | Sun: Closed',
    highlight: false,
  },
  {
    icon: Award,
    title: 'Unbeatable Price',
    description: 'High-quality parts at competitive prices.',
    highlight: false,
  },
];

const pricing = [
  { part: 'Engine', price: '$699' },
  { part: 'Transmission', price: '$449' },
  { part: 'Differential', price: '$299' },
  { part: 'Axle Assembly', price: '$99' },
  { part: 'Other Parts', price: '$49' },
];

export default function QualityStandards() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Shop with Nexus Auto Parts?</h2>
          <p className="text-muted-foreground">Commitment to excellence in every part we deliver</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {standards.map((standard) => (
            <Card
              key={standard.title}
              className={`hover-elevate transition-all ${standard.highlight ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 ring-2 ring-primary/20' : ''}`}
              data-testid={`standard-${standard.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${standard.highlight ? 'bg-primary text-primary-foreground' : 'bg-ring/10'}`}>
                    {standard.highlight ? (
                      <img src="https://cdn-icons-png.flaticon.com/512/3388/3388466.png" alt="Warranty" className="w-8 h-8 invert" />
                    ) : (
                      <standard.icon className="w-7 h-7 text-ring" />
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg mb-1 ${standard.highlight ? 'text-primary' : ''}`}>{standard.title}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-6">Starting Prices</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {pricing.map((item) => (
              <div key={item.part} className="text-center px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-bold text-primary">{item.price}</p>
                <p className="text-sm text-zinc-300">{item.part}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
