# Raj Bakery 🥐🍰

> **Freshness Baked Into Every Moment.**  
> A high-performance, mobile-first web application and digital product showcase for **Raj Bakery** in Pune, Maharashtra. Built with React 19, Vite 8, Tailwind CSS v4, an automated Sharp WebP image optimization pipeline, and a zero-latency WhatsApp ordering engine.

[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WebP Optimized](https://img.shields.io/badge/Image_Payload-97.7%25_Reduced-success)](https://developers.google.com/speed/webp)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)

---

## 📖 Documentation Quick Links

- 🏛️ **[System Architecture](SYSTEM_ARCHITECTURE.md)** — In-depth technical architecture, data flows, component hierarchy, image pipeline, and deployment topology.
- 📋 **[Product Requirements Document (PRD)](PRD.md)** — Comprehensive product specs, user personas, page specifications, dietary rules, and non-functional requirements.

---

## ⚡ Highlights & Key Capabilities

### 1. 🖼️ High-Efficiency WebP Image Optimization Pipeline
- **Original Photos 100% Preserved**: All 100 raw client photographs are safely archived in `public/images/original/`.
- **Modern WebP Compression**: Generated using `sharp` at quality `80–82`, shrinking total image payload from **298.00 MB down to 6.86 MB** (**97.7% reduction**).
- **Responsive Breakpoint Assets**: Automatically generated `320w`, `480w`, `640w`, `960w`, `1200w`, and `1920w` variants.
- **Zero Layout Shift (CLS: 0.00)**: Reusable `<OptimizedImage />` component with locked aspect ratios (`1:1` for products/cakes) and pulse shimmer placeholders.
- **Aggressive Edge Caching**: 1-year immutable cache headers configured in `vercel.json` for lightning-fast repeat visits.

### 2. 📱 Mobile-First App Experience
- **Touch-First Ergonomics**: All interactive elements (buttons, chips, inputs, links) strictly meet the **$\ge 48\text{px}$** touch target requirement.
- **Horizontal Smooth-Scroll Category Chips**: Clean, unclipped category ribbon across both `/products` and `/special-cakes` with full visibility for *"All"* and *"Special Delights"*.
- **Adaptive Product Grid**: 1 column on compact mobile, 2 columns on standard phones ($390\text{px}+$), and 4 columns on desktop.
- **Mobile Sticky Action Bar**: Bottom bar supporting hardware safe area insets (`env(safe-area-inset-bottom)`) with 1-tap WhatsApp, Cake Enquiry, Store Locations, and Phone dialing.
- **PWA Ready**: Integrated `manifest.webmanifest` defining standalone display mode, brand theme color `#0F4C47`, and background `#FFFDF7`.

### 3. 💬 1-Tap WhatsApp Conversion Engine
- **Pre-filled Product Inquiries**: Product cards and cake cards generate pre-formatted WhatsApp messages containing exact product name and category.
- **Custom Cake Enquiry Modal**: Interactive multi-step modal capturing cake flavor, occasion, weight, preferred date, and custom notes.
- **Centralized Routing**: Managed via `src/config/business.js` for instant testing/production number switching.

### 4. 🥗 Standardized FSSAI Dietary Governance
- **Sukhsagar Nagar Branch**: **100% Pure Vegetarian** bakery facility.
- **Kondhwa Branch (Main)**: **Veg & Non-Veg Both** bakery facility.
- **Standardized Dietary Icons**: Unified `<DietarySymbol />` component ensuring Pure Veg and Veg & Non-Veg symbols share identical square dimensions, borders, and dots.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture, state management & concurrency |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Instant HMR, ESM bundler & optimized production builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS with CSS variables & container queries |
| **Routing** | [React Router 7](https://reactrouter.com/) | Client-side routing with SPA rewrite rules |
| **Image Pipeline** | [Sharp](https://sharp.pixelplumbing.com/) | High-performance WebP conversion & multi-size generation |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible SVG icons |
| **Deployment** | [Vercel](https://vercel.com/) | Global edge distribution, CDN caching & serverless routing |

---

## 📂 Project Structure

```
Raj_Bakery_website/
├── public/
│   ├── favicon.svg              # Vector brand favicon
│   ├── manifest.webmanifest     # Web App Manifest for mobile PWA
│   └── images/
│       ├── original/            # PRESERVED untouched raw client photographs
│       │   ├── bakery/
│       │   ├── cakes/
│       │   └── products/
│       └── optimized/           # Generated responsive WebP assets
│           ├── bakery/
│           ├── cakes/
│           └── products/
├── scripts/
│   ├── optimize-images.js       # Sharp-based image optimization pipeline
│   └── update-data-paths.js     # Data asset path synchronization
├── src/
│   ├── components/              # UI components (ProductCard, CakeCard, DietarySymbol, OptimizedImage, etc.)
│   ├── config/                  # Central business & WhatsApp routing configuration
│   ├── data/                    # Products, Cakes, Gallery, and Location data models
│   ├── pages/                   # Home, About, Products, SpecialCakes, FindUs, Contact
│   ├── utils/                   # WhatsApp message builder & number sanitizers
│   ├── App.jsx                  # Root router & layout wrapper
│   └── main.jsx                 # Entrypoint
├── PRD.md                       # Product Requirements Document
├── SYSTEM_ARCHITECTURE.md       # Technical System Architecture Document
├── vercel.json                  # Vercel SPA rewrites & static asset caching headers
└── vite.config.js               # Vite & Tailwind configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/faizansari9558/Raj_Bakery_website.git
cd Raj_Bakery_website

# Install dependencies
npm install
```

### 3. Running Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Running Image Optimization Pipeline
If you add new raw photographs to `public/images/original/`:
```bash
node scripts/optimize-images.js
node scripts/update-data-paths.js
```

### 5. Building for Production
```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📍 Store Locations & Contact Information

| Branch | Address | Dietary Status | Google Maps |
| :--- | :--- | :--- | :--- |
| **Kondhwa (Main)** | Shop No 2, Akshar Dham Soc, Saibaba Nagar, Kondhwa, Pune – 411048 | Veg & Non-Veg Both | [View on Maps](https://maps.app.goo.gl/qPyZMEZvNJGkTA176) |
| **Sukhsagar Nagar** | Sukhsagar Nagar, Katraj, Pune – 411046 | 100% Pure Veg | [View on Maps](https://maps.app.goo.gl/zuttigUacWmgKD5s7) |

### Key Contacts
- **Nadeem Ansari** (*Main Contact for Orders & Enquiries*): `+91 7020812151`
- **Riyasat Ansari** (*Store Contact*): `+91 8788950429`
- **Tanveer Ansari** (*Store Contact*): `+91 8446632570`

---

## ⚙️ How to Switch Active WhatsApp Number

To switch the active WhatsApp receiver from testing mode to Nadeem Ansari:

1. Open [`src/config/business.js`](src/config/business.js).
2. Update `enquiryWhatsApp`:
   ```javascript
   // Change from testing number:
   enquiryWhatsApp: "9558404024",
   
   // To production main contact:
   enquiryWhatsApp: "7020812151",
   ```
3. Commit and push. All product enquiries across the website will instantly route to the new number.

---

## 📄 License

© 2026 **Raj Bakery**. All Rights Reserved. Freshly baked in Pune, India.
