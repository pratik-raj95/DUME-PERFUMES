# DUME PERFUMES — Luxury Brand Website

> **Scent Is Your Signature.**
> Affordable luxury, sophisticated fragrances, and memorable personal style.

A luxury editorial e-commerce website for **DUME PERFUMES**, showcasing five signature 50&nbsp;ml Extrait de Parfum flacons featuring artisanal turned solid beechwood closures and European flint glass.

---

## The Collection

| Fragrance | Concentration | Category | Olfactory Highlights |
|---|---|---|---|
| **Rasasi Hawas Ice** | 50 ml · Extrait de Parfum | Fresh / Aquatic | Frozen Bergamot, Frosted Apple, Oceanic Accord, Ambergris |
| **CR7 Blue** | 50 ml · Extrait de Parfum | Fresh / Aromatic | Sea Salt, Cardamom, Highland Lavender, Smoked Atlas Cedar |
| **Creed Aventus** | 50 ml · Extrait de Parfum | Woody / Fruity | Blackcurrant, Royal Pineapple, Smoky Birch, Oakmoss |
| **Yum Boujee Marshmallow** | 50 ml · Extrait de Parfum | Sweet / Gourmand | Fluffy Marshmallow, Whipped Vanilla Cream, Pistachio |
| **Dior Sauvage** | 50 ml · Extrait de Parfum | Fresh / Woody | Calabrian Bergamot, Sichuan Pepper, Noble Ambroxan |

---

## Architectural Highlights

- **Framework**: Next.js 16 (App Router) & React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Custom Luxury Theme
- **Typography**: Cormorant Garamond (Editorial Serif) & Inter (Sans-Serif)
- **State Management**: React Context (`CartContext`) with persistent `localStorage` support
- **Iconography**: Minimalist luxury icons via `lucide-react`
- **Interactive Features**:
  - Live Fragrance Finder scent-personality profiler
  - Client-side Shopping Bag drawer with live subtotal
  - Demo Checkout experience with direct WhatsApp concierge order generation
  - Full-screen Product Details modal with olfactory pyramids
  - Real-time search across names, categories, and fragrance notes
  - Private Reserve newsletter subscription with input validation
  - WhatsApp concierge integration with customizable phone numbers

---

## Project Structure

```
├── public/
│   └── images/                     # 5 authentic product photographs
│       ├── rasasi-hawas-ice.jpg
│       ├── cr7-blue.jpg
│       ├── creed-aventus.jpg
│       ├── yum-boujee-marshmallow.jpg
│       └── dior-sauvage.jpg
├── src/
│   ├── app/
│   │   ├── globals.css             # Luxury theme variables & styling
│   │   ├── layout.tsx              # RootLayout, fonts & OpenGraph metadata
│   │   └── page.tsx                # Composition of all atelier sections
│   ├── components/                 # Modular React components
│   │   ├── Header.tsx              # Wordmark, navigation & bag counter
│   │   ├── HeroSection.tsx         # Art-directed editorial hero
│   │   ├── BrandStory.tsx          # Brand narrative & craftsmanship
│   │   ├── ProductCollection.tsx   # Category filterable gallery
│   │   ├── ProductCard.tsx         # Individual product presentation
│   │   ├── FeaturedSpotlight.tsx   # Deep dive note pyramid breakdown
│   │   ├── FragranceFinder.tsx     # Interactive olfactory quiz
│   │   ├── WhyChooseDume.tsx       # Four pillars of excellence
│   │   ├── RitualBanner.tsx        # Extrait application & storage guide
│   │   ├── ShoppingBagDrawer.tsx   # Slide-out bag drawer
│   │   ├── DemoCheckoutModal.tsx   # Demo reservation & WhatsApp dispatch
│   │   ├── ProductDetailsModal.tsx # Full olfactory modal
│   │   ├── SearchModal.tsx         # Live fragrance & note search
│   │   ├── Newsletter.tsx          # Private Reserve subscription
│   │   ├── ContactSection.tsx      # Atelier hours & inquiry form
│   │   └── Footer.tsx              # Directory, legal disclosures & top scroll
│   ├── context/
│   │   └── CartContext.tsx         # Persistent client state provider
│   └── data/
│       ├── config.ts               # Configurable business details
│       └── products.ts             # Centralized fragrance dataset
└── package.json
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## Brand Disclosure
DUME PERFUMES is an independent luxury fragrance atelier. Product names visible on the client-supplied flacon photographs are referenced for olfactory illustration and demonstration purposes. DUME does not claim official affiliation with or endorsement by the referenced designer fragrance houses.
