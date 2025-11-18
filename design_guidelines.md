# Car Parts E-Commerce Website - Design Guidelines

## Design Approach
**Automotive-Themed E-Commerce Platform** targeting returning/existing users who value familiarity, simplicity, and trust. The design prioritizes clean navigation, efficient product discovery, and seamless mobile-to-desktop responsiveness.

## Color Palette & Theme
- **Primary Colors**: Dark blues, metallic grey
- **Accent**: Orange highlights for CTAs and important elements
- **Approach**: Strong contrasts, automotive industry aesthetic
- **Trust Indicators**: Clean, professional presentation for returning customers

## Typography & Spacing
- **Hierarchy**: Bold headings for sections, clean sans-serif for body text
- **Tailwind Spacing Units**: Primarily use 4, 6, 8, 12, 16 for consistent rhythm
- **Padding**: Generous spacing around cards and sections for clarity
- **Grid Structure**: Consistent, predictable layouts

## Layout System

### Navigation Bar (Sticky)
- Logo, category links, search bar, login/cart icons
- Mobile: Hamburger menu → slide-in drawer
- Scroll behavior: Shrink or add shadow on scroll

### Landing Page Sections

**Section 1: Hero Carousel** (Full-width)
- Rotating banner showcasing offers, new arrivals, trending parts
- Bold CTAs: "Shop Now", "Explore Parts", "View Latest"
- Images: High-quality automotive parts, promotional graphics

**Section 2: Featured Auto Parts**
- Horizontal scrollable cards
- Card contents: Image, part name, price, availability badge, "Quick View"/"Add to Cart" button
- Smooth slide animations on scroll

**Section 3: Available Brands**
- Grid layout: Mobile (2-3 per row), Desktop (5-6 per row)
- Brand logos with subtle scale-up hover effects

**Section 4: Car Manufacturer Cards**
- Cards for Toyota, Hyundai, BMW, Kia, etc.
- Hover animations with shadow
- Clickable → redirects to filtered product listing

**Section 5: Footer** (Multi-column)
- Column A: Company Info (About, Contact, Careers, Privacy, Terms)
- Column B: Customer Support (Track Order, Returns, Warranty, FAQs, Help)
- Column C: Popular Categories (Engine Parts, Body Parts, Brakes, Electrical, Accessories)
- Column D: Connect (Social icons, WhatsApp, Newsletter signup)
- Bottom line: Copyright, "Designed for trusted returning users", payment icons

### Product Listing Page

**Left Sidebar Filters** (Collapsible accordion on mobile)
- Price slider, Brand, Model, Car Year, Category, Availability toggle

**Product Grid**
- Clean cards: Image, pricing, specs, ratings, availability
- Sorting dropdown: Price Low→High, Price High→Low, Newest, Best Rated, In-Stock Only

### Chatbot Component
- Floating round button (bottom-right)
- Opens chat window: Previous orders, quick reorder, frequently purchased, personalized suggestions
- Lightweight, friendly design

## Component Library

**Cards**: Rounded edges, shadow on hover, consistent padding
**Buttons**: Orange accents for primary actions, clear hover states
**Forms**: Clean inputs with proper spacing, mobile-optimized
**Badges**: Availability indicators, discount tags
**Icons**: Cart, search, filter, social media (use Heroicons via CDN)

## Animations
- Smooth scroll effects (minimal, not distracting)
- Carousel transitions
- Card hover animations (subtle scale/shadow)
- Slide-in drawer for mobile menu
- Horizontal scroll for featured parts

## Images
- **Hero Carousel**: Promotional automotive parts images, discount banners
- **Product Cards**: High-quality part photographs on white/neutral backgrounds
- **Brand Logos**: Official manufacturer logos
- **Manufacturer Cards**: Car brand emblems or representative vehicle images

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid adaptations: Single column mobile → multi-column desktop
- Horizontal scrolling for mobile card layouts where appropriate
- Collapsible filters on mobile