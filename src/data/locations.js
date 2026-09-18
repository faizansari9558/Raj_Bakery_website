/**
 * Raj Bakery - Bakery Locations Data
 * Stores the two physical bakery locations in Pune.
 */

export const locations = [
  {
    id: 1,
    name: "Raj Bakery – Kondhwa",
    areaName: "Kondhwa",
    address: "Shop No 2, Akshar Dham Soc, Saibaba Nagar, Kondhwa, Pune, Maharashtra – 411048",
    shortAddress: "Shop No 2, Akshar Dham Soc, Saibaba Nagar, Kondhwa, Pune – 411048",
    mapUrl: "https://maps.app.goo.gl/qPyZMEZvNJGkTA176",
    image: "/images/optimized/bakery/raj-bakery-kondhwa.webp",
    timing: "Open Daily (Check Store for Timings)",
    isMain: true,
    isPureVeg: false,
    dietaryType: "Veg & Non-Veg Both",
    dietaryBadge: "Veg & Non-Veg",
    note: "Veg & Non-Veg bakery favourites, fresh bakes & celebration cakes."
  },
  {
    id: 2,
    name: "Raj Bakery – Sukhsagar Nagar",
    areaName: "Sukhsagar Nagar",
    address: "Sukhsagar Nagar, Katraj, Pune, Maharashtra – 411046",
    shortAddress: "Sukhsagar Nagar, Katraj, Pune – 411046",
    mapUrl: "https://maps.app.goo.gl/zuttigUacWmgKD5s7",
    image: "/images/optimized/bakery/raj-bakery-sukhsagar.webp",
    timing: "Open Daily (Check Store for Timings)",
    isMain: false,
    isPureVeg: true,
    dietaryType: "100% Pure Veg",
    dietaryBadge: "100% Pure Veg",
    note: "100% Pure Vegetarian bakery serving fresh bakes, pastries, cookies & custom cakes."
  }
];

export default locations;
