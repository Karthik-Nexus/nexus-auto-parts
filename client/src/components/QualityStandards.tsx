import { Card, CardContent } from '@/components/ui/card';
import {
  Headphones,
  Clock,
  Award,
} from 'lucide-react';

const standards = [
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is available around the clock to assist you.',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Mon-Fri: 9AM-6PM EST | Sat: 10AM-4PM EST | Sun: Closed',
  },
  {
    icon: Award,
    title: 'Unbeatable Price',
    description: 'High-quality parts at competitive prices.',
  },
];

export default function QualityStandards() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Shop with Nexus Auto Parts LLC?</h2>
          <p className="text-muted-foreground">Commitment to excellence in every part we deliver</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <Card key={standard.title} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <standard.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{standard.title}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
