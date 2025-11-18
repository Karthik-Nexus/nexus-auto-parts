import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Gift, Clock } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Flash Sale',
    description: 'Limited time offer on brake systems',
    discount: '40% OFF',
    tag: 'Hot Deal',
    icon: Zap,
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    badgeColor: 'bg-red-500',
    endTime: '24 Hours Left',
  },
  {
    id: 2,
    title: 'Premium Parts Bundle',
    description: 'Complete engine maintenance kit',
    discount: 'Save $150',
    tag: 'Best Value',
    icon: Sparkles,
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    badgeColor: 'bg-purple-500',
    endTime: 'Limited Stock',
  },
  {
    id: 3,
    title: 'New Customer Gift',
    description: 'Free shipping + extra 15% off',
    discount: '15% OFF',
    tag: 'Welcome',
    icon: Gift,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    badgeColor: 'bg-emerald-500',
    endTime: 'First Order',
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Limited Time Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Exclusive Deals Just for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these incredible savings. Premium quality parts at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-testid={`offer-card-${offer.id}`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Animated corner badge */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              {/* Hot tag badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${offer.badgeColor} text-white border-0 px-3 py-1 font-bold shadow-lg animate-pulse`}>
                  {offer.tag}
                </Badge>
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                  <offer.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm">
                  {offer.description}
                </p>

                {/* Discount display */}
                <div className="mb-6">
                  <div className={`inline-block px-6 py-3 rounded-xl bg-gradient-to-r ${offer.gradient} text-white font-bold text-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    {offer.discount}
                  </div>
                </div>

                {/* Time indicator */}
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{offer.endTime}</span>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group-hover:shadow-lg transition-shadow"
                  size="lg"
                  data-testid={`button-claim-offer-${offer.id}`}
                >
                  Claim Offer
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More exclusive deals available in our catalog
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="hover-elevate"
            data-testid="button-view-all-offers"
          >
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
}
