# Nexus Used Auto Parts — Project Summary

- Built and deployed a full-stack auto parts e-commerce platform using **React, TypeScript, Express, and Vite** with **Vercel serverless deployment**, delivering 23+ responsive pages including 10 product category landing pages, About, Contact, FAQ, Warranty, and legal compliance pages.

- Developed a **multi-step conversational chatbot** using React state machines and vehicle data selectors (Year → Make → Model → Part) to guide customers through part discovery, capturing lead data and routing to backend APIs for automated follow-up.

- Integrated **Google Sheets API** with service account authentication to automatically log incoming leads (name, email, phone, vehicle details) into a centralized spreadsheet for real-time sales pipeline tracking.

- Engineered a **dual-channel email notification system** using Nodemailer and Gmail SMTP, sending internal part request alerts to the sales team and personalized confirmation emails to customers upon form submission.

- Implemented **Google Tag Manager (GTM) SPA tracking** using a custom React component with `dataLayer.push` events on route changes to ensure accurate page view analytics across all client-side navigated routes.

- Designed and built an interactive **hero carousel with an embedded vehicle search tool** using Framer Motion and Embla Carousel, enabling users to search parts by Year, Make, Model, and Part type directly from the homepage.

- Developed a comprehensive **UI component library** using Radix UI primitives and Tailwind CSS with dark mode theming, ensuring consistent design language and accessibility across all customer-facing pages.

- Architected **client-side routing** using Wouter with 20+ routes and implemented reusable layout patterns (Navigation, Footer, Chatbot, Call Widget) wrapped in global providers for state management (ChatbotProvider, QueryClientProvider).

- Configured **Vercel deployment infrastructure** with static build + serverless function architecture, implementing URL rewrites to serve the SPA shell for client-side routes and proxy `/api/*` requests to the Express backend.
