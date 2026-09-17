# Raj Bakery

A modern customer-facing bakery website for **Raj Bakery** (Pune, India). Designed with rich aesthetics, showcasing authentic bakery delights, fresh cookies, crispy khari, and custom celebration cakes, with a dynamic WhatsApp enquiry and ordering system.

## 🍰 Technology

- **React** (Component-driven UI & State Management)
- **Vite** (Next-generation frontend tooling & build pipeline)
- **Tailwind CSS** (Modern utility-first styling with custom golden-amber theme)
- **JavaScript (ES6+)** (Dynamic business logic & URL encoding)
- **Lucide React** (Crisp, modern iconography)
- **Vercel** (Cloud deployment with SPA routing)

---

## 🚀 Features

- **Dynamic WhatsApp Enquiry System**: Every product and cake card features an automated "Enquire on WhatsApp" action that generates a pre-filled, URL-encoded message with exact product details.
- **Centralized Business Configuration**: Single source of truth (`src/config/business.js`) for phone numbers, main order contacts, and enquiry routing.
- **Multi-Location Support**: Full details and Google Maps navigation for both Pune branches:
  - **Raj Bakery – Kondhwa**: Veg & Non-Veg bakery favourites.
  - **Raj Bakery – Sukhsagar Nagar**: 100% Pure Vegetarian bakery.
- **50+ Real Product & Cake Catalog**: Categorized into Khari & Toast, Biscuits & Cookies, Pastries & Cakes, Cream Rolls, Breads & Pav, Sweet Pav & Donuts, and Special Delights.
- **Custom Cake Enquiry Form**: Interactive cake order and customization form routing requests directly to WhatsApp.
- **Mobile-Optimized & Responsive**: Sticky mobile action bar, touch-friendly navigation, and zero horizontal scroll across devices.

---

## 📦 Installation

To run this project locally, clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Raj_Bakery_website
npm install
```

---

## 💻 Development

Start the local development server with hot-module replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

The built assets will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

This application is pre-configured for one-click deployment on [Vercel](https://vercel.com).

1. Push the repository to **GitHub**.
2. Log into your **Vercel** dashboard and click **Add New > Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

> Note: Single Page Application (SPA) routing is pre-configured via `vercel.json` for smooth client-side page refreshes.

---

## ⚙️ Business Configuration

To update contact numbers or switch the active WhatsApp enquiry receiver:
1. Open `src/config/business.js`.
2. Modify `enquiryWhatsApp` or contact entries.
3. The change will automatically propagate across all product cards, cake forms, sticky bars, and buttons.

---

## 📄 License

© Raj Bakery. All rights reserved.
