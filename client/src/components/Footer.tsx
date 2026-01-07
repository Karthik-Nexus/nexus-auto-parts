import { Facebook, Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  support: [
    { name: 'Track Order', href: '/track' },
    { name: 'Return & Refund Policy', href: '/warranty' },
    { name: 'Warranty Info', href: '/warranty' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Help Center', href: '/help' },
  ],
  categories: [
    { name: 'Engine Parts', href: '/engine' },
    { name: 'Brakes & Suspension', href: '/products' },
    { name: 'Electrical Components', href: '/instrument-cluster' },
    { name: 'Accessories', href: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-6">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">Company Info</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">Customer Support</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">Popular Categories</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Button variant="outline" size="icon" data-testid="button-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-youtube">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-whatsapp">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Newsletter</h4>
              <div className="flex gap-1 sm:gap-2">
                <Input placeholder="Email" type="email" className="min-w-0 flex-1 text-sm" data-testid="input-newsletter" />
                <Button className="bg-ring hover:bg-ring/90 text-white border-0 shrink-0" data-testid="button-subscribe">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 NexusAutoParts — All Rights Reserved • Designed for trusted returning users
            </p>
            <div className="flex items-center gap-3">
              <SiVisa className="w-10 h-6 text-muted-foreground" />
              <SiMastercard className="w-10 h-6 text-muted-foreground" />
              <SiAmericanexpress className="w-10 h-6 text-muted-foreground" />
              <div className="px-2 py-1 border rounded text-xs font-semibold text-muted-foreground">Discover</div>
              <SiPaypal className="w-10 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
