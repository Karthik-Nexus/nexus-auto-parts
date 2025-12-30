import { Card, CardContent } from '@/components/ui/card';
import {
  ShieldCheck,
  Award,
  Truck,
  RefreshCw,
  CheckCircle2,
  Medal
} from 'lucide-react';

const standards = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'We offer free shipping on all our auto parts.',
  },
  {
    icon: Medal,
    title: '30-90 Days Warranty',
    description: 'Enjoy 30 to 90 days warranty (T&C apply).',
  },
  {
    icon: ShieldCheck,
    title: 'Excellent Customer Support',
    description: 'Contact our team for knowledgeable and helpful support.',
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Shop with Nexus Auto Parts?</h2>
          <p className="text-muted-foreground">Commitment to excellence in every part we deliver</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <Card
              key={standard.title}
              className="hover-elevate"
              data-testid={`standard-${standard.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-ring/10 flex items-center justify-center">
                      <standard.icon className="w-6 h-6 text-ring" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{standard.title}</h3>
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
