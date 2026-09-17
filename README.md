# Raj Bakery 🥐🍰

A modern, mobile-first customer-facing bakery website for **Raj Bakery** (Pune, India). Crafted with warm visual aesthetics, authentic bakery photographs, and a centralized dynamic WhatsApp enquiry and ordering system.

---

## 📱 Mobile-First Design & Architecture

The website is engineered from the ground up prioritizing mobile phone users (320px–480px) while scaling responsively to tablets (768px–1024px) and desktops (1280px+):

- **Compact Mobile Header & Drawer**: Non-intrusive navigation with background scroll-locking, backdrop tap-to-close, and large finger-friendly touch targets (min 48px height).
- **Horizontal Scrollable Category Chips**: Smooth `no-scrollbar` category ribbons on mobile that prevent vertical clutter and eliminate page-level horizontal overflow.
- **Adaptive Product Grid**: Single-column layout on compact screens (<390px), dual-column layout on modern phones (390px+), and 4-column layout on desktop.
- **Touch-Swipe Lightbox Gallery**: Full touch gesture support (swipe left / right) with accessible navigation and image counters.
- **Sticky Mobile Action Bar**: Fixed bottom bar with `safe-area-inset-bottom` support for modern edge-to-edge screens, providing 1-tap access to WhatsApp, Custom Cake Enquiry, Store Locations, and Direct Phone Call.

---

## 🍰 Technology Stack

- **React 19** (Component-driven UI & State Management)
- **Vite 8** (Next-generation build tool & dev server)
- **Tailwind CSS v4** (Modern utility-first styling with custom golden-amber theme)
- **React Router 7** (Client-side routing with SPA fallback via `vercel.json`)
- **JavaScript (ES6+)** (Dynamic business logic & URL encoding)
- **Lucide React** (Clean, accessible vector iconography)
- **Vercel** (Production cloud deployment)

---

## 🚀 Key Features

### 1. Dynamic WhatsApp Enquiry System
- Every product and celebration cake card dynamically creates a pre-filled, URL-encoded WhatsApp message with exact product details and category.
- Centralized URL generator targeting `businessInfo.enquiryWhatsApp`.

### 2. Centralized Business Configuration (`src/config/business.js`)
- Single source of truth for bakery contact numbers, main order contact, and enquiry routing.
- **Active Testing Number**: `9558404024`
- **Main Production Contact**: Nadeem Ansari (`7020812151`)

### 3. Multi-Location Support (Pune, India)
- **Raj Bakery – Kondhwa**: Veg & Non-Veg bakery favourites.
- **Raj Bakery – Sukhsagar Nagar**: 100% Pure Vegetarian bakery.
- Standard Indian boxed dietary indicators (Green square dot for Veg, Brown square dot for Non-Veg).
- Direct Google Maps navigation and directions links.

### 4. 50+ Real Product & Cake Catalog
- Mapped across 8 categorized bakery sections:
  - *Khari & Toast*
  - *Biscuits & Cookies*
  - *Pastries & Cakes*
  - *Cream Rolls*
  - *Breads & Pav*
  - *Pizza & Burger Buns*
  - *Sweet Pav & Donuts*
  - *Special Delights*
- Handcrafted celebration cakes for birthdays, anniversaries, weddings, and kids theme parties.

### 5. Custom Cake Enquiry Form
- Mobile-optimized single-field-per-row layout with input modes (`tel`, `date`, `email`, `text`) routing celebration details directly to WhatsApp.

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/faizansari9558/Raj_Bakery_website.git
cd Raj_Bakery_website
npm install
```

---

## 💻 Local Development

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Production Build

To test and compile the production bundle:

```bash
npm run build
```

The optimized static build will be placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

This repository is configured for zero-configuration continuous deployment on [Vercel](https://vercel.com).

1. Import the repository in your Vercel dashboard.
2. Select **Vite** as the Framework Preset.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

> **Note**: `vercel.json` contains single-page application (SPA) rewrite rules to ensure direct page refreshes (e.g., `/products`, `/special-cakes`, `/contact`) resolve without 404 errors.

---

## ⚙️ How to Switch Active WhatsApp Number

When testing is complete and you are ready for production orders:

1. Open `src/config/business.js`.
2. Change:
   ```javascript
   enquiryWhatsApp: "9558404024",
   ```
   to:
   ```javascript
   enquiryWhatsApp: "7020812151",
   ```
3. Commit and push to `main`. The entire website will automatically start routing all customer product enquiries to Nadeem Ansari.

---

## 📄 License

© Raj Bakery. All rights reserved.
