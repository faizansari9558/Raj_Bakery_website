/**
 * Raj Bakery - Complete Real Products Catalog
 * Directly mapped from the client's categorized folders in "Raj_Bakery_Products_Photo".
 * All product photos are the REAL client bakery photographs with consistent 1:1 ratio.
 */

export const productCategories = [
  "All",
  "Khari & Toast",
  "Biscuits & Cookies",
  "Pastries & Cakes",
  "Cream Rolls",
  "Breads & Pav",
  "Pizza & Burger Buns",
  "Sweet Pav & Donuts",
  "Special Delights"
];

export const products = [
  // ==========================================
  // 1. KHARI & TOAST (Special Khari, Special Toast, Packet Items)
  // ==========================================
  {
    id: "kh-1",
    name: "Crispy Twisted Khari",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-twisted-khari.webp",
    description: "Multi-layered, golden flaky puff pastry khari, baked fresh daily.",
    isFeatured: true
  },
  {
    id: "kh-2",
    name: "Long Twisted Khari",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-long-twisted-khari.webp",
    description: "Special elongated crispy twisted puff sticks.",
    isFeatured: false
  },
  {
    id: "kh-3",
    name: "Zeera Puff Khari",
    category: "Khari & Toast",
    image: "/images/optimized/products/special-khari-zeera-khari.webp",
    description: "Flaky puff pastry infused with roasted cumin seeds for a savoury aroma.",
    isFeatured: true
  },
  {
    id: "kh-4",
    name: "Samosa Khari",
    category: "Khari & Toast",
    image: "/images/optimized/products/special-khari-samosa-khari.webp",
    description: "Triangular layered flaky puff khari with crisp texture.",
    isFeatured: false
  },
  {
    id: "kh-5",
    name: "Sugar Khari",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-sugar-khari.webp",
    description: "Sweet caramelized crispy puff pastry khari.",
    isFeatured: false
  },
  {
    id: "kh-6",
    name: "Rich Mawa Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/special-toast-mava-toast.webp",
    description: "Crunchy double-baked toast with authentic rich mawa aroma.",
    isFeatured: true
  },
  {
    id: "kh-7",
    name: "Sweet Milk Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/special-toast-milk-toast.webp",
    description: "Crispy golden sweet milk rusk toast, perfect with morning chai.",
    isFeatured: false
  },
  {
    id: "kh-8",
    name: "Sponge Cake Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/special-toast-cake-toast.webp",
    description: "Double-baked aromatic sponge cake into crispy sweet toast.",
    isFeatured: false
  },
  {
    id: "kh-9",
    name: "Tutti Frutti Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-tuti-fruti-toast.webp",
    description: "Crispy toast studded with colourful tutti frutti bits.",
    isFeatured: false
  },
  {
    id: "kh-10",
    name: "Baby Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-baby-toast.webp",
    description: "Bite-sized crispy mini toasts for snacking.",
    isFeatured: false
  },
  {
    id: "kh-11",
    name: "Long Toast",
    category: "Khari & Toast",
    image: "/images/optimized/products/packet-items-long-toast.webp",
    description: "Classic long bakery tea toast.",
    isFeatured: false
  },

  // ==========================================
  // 2. BISCUITS & COOKIES (Biscuit & Packet Items)
  // ==========================================
  {
    id: "bi-1",
    name: "Special Shrewsbury Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/special-shrewsbury-biscuit-dish.webp",
    description: "Pune's famous buttery and melt-in-the-mouth Shrewsbury biscuits stamped with Raj Bakery seal.",
    isFeatured: true
  },
  {
    id: "bi-2",
    name: "Special Nankhatai",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/biscuit-nancate-biscuit.webp",
    description: "Traditional crumbly cardamom and ghee nankhatai cookies.",
    isFeatured: true
  },
  {
    id: "bi-3",
    name: "Besan Nankhatai",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/special-item-besan-nancate.webp",
    description: "Roasted gram flour nankhatai with rich aroma and soft crumb.",
    isFeatured: false
  },
  {
    id: "bi-4",
    name: "Choco-Chips Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/choco-chips-biscuit-dish.webp",
    description: "Crunchy baked chocolate cookies loaded with dark chocolate chips.",
    isFeatured: true
  },
  {
    id: "bi-5",
    name: "Kaju Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/kaju-biscuit-dish.webp",
    description: "Rich buttery biscuits topped with whole crunchy cashew nuts.",
    isFeatured: true
  },
  {
    id: "bi-6",
    name: "Tutti Frutti Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/fruit-biscuit-dish.webp",
    description: "Golden butter cookies with red & green tutti frutti pieces.",
    isFeatured: true
  },
  {
    id: "bi-7",
    name: "Zeera Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/zeera-butter-biscuit-dish.webp",
    description: "Golden savoury cumin seed butter biscuits, a tea-time classic.",
    isFeatured: true
  },
  {
    id: "bi-8",
    name: "Makhaniya Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/optimized/products/biscuit-makhaniya-butter.webp",
    description: "Traditional soft and crumbly butter biscuits.",
    isFeatured: false
  },

  // ==========================================
  // 3. PASTRIES & CAKES (Pastry, Specical Cake, Birthday Cake)
  // ==========================================
  {
    id: "pc-1",
    name: "Butterscotch Birthday Cake",
    category: "Pastries & Cakes",
    image: "/images/optimized/cakes/raj-bakery-butterscotch-birthday-cake.webp",
    description: "Textured yellow butterscotch celebration cake with cream rosettes and jelly accents.",
    isFeatured: true
  },
  {
    id: "pc-2",
    name: "Chocolate Drip Birthday Cake",
    category: "Pastries & Cakes",
    image: "/images/optimized/cakes/raj-bakery-chocolate-drip-birthday-cake.webp",
    description: "Celebration cake with rich dark chocolate drip, whipped cream rosettes, and cherry toppings.",
    isFeatured: true
  },
  {
    id: "pc-6",
    name: "Chocolate Cream Pastry",
    category: "Pastries & Cakes",
    image: "/images/optimized/products/pastry-chocolate-pastry.webp",
    description: "Moist chocolate sponge slice layered with rich chocolate cream.",
    isFeatured: true
  },
  {
    id: "pc-7",
    name: "Butterscotch Pastry",
    category: "Pastries & Cakes",
    image: "/images/optimized/products/pastry-butterscotch-pastry.webp",
    description: "Layers of vanilla sponge, butterscotch caramel sauce, and crunchy praline.",
    isFeatured: true
  },
  {
    id: "pc-8",
    name: "Strawberry Jam Cake",
    category: "Pastries & Cakes",
    image: "/images/optimized/products/jam-cake-single.webp",
    description: "Soft layered cake topped with sweet mixed fruit jam and a cream rosette.",
    isFeatured: true
  },

  // ==========================================
  // 4. CREAM ROLLS (Cream Rolls)
  // ==========================================
  {
    id: "cr-1",
    name: "Crispy Cream Roll",
    category: "Cream Rolls",
    image: "/images/optimized/products/cream-rolls-cream-roll.webp",
    description: "Golden, crispy puff pastry cone generously filled with sweet vanilla cream.",
    isFeatured: true
  },
  {
    id: "cr-2",
    name: "Chocolate Cream Roll",
    category: "Cream Rolls",
    image: "/images/optimized/products/cream-rolls-chocolate-roll.webp",
    description: "Flaky pastry roll loaded with smooth chocolate cream.",
    isFeatured: true
  },
  {
    id: "cr-3",
    name: "Soft Cream Roll Packet",
    category: "Cream Rolls",
    image: "/images/optimized/products/cream-rolls-soft-cream-roll-packet.webp",
    description: "Pack of soft fresh cream rolls for family snacking.",
    isFeatured: false
  },
  {
    id: "cr-4",
    name: "Cream Roll Packet",
    category: "Cream Rolls",
    image: "/images/optimized/products/cream-rolls-cream-roll-packet.webp",
    description: "Crispy fresh vanilla cream rolls packed for convenience.",
    isFeatured: false
  },

  // ==========================================
  // 5. BREADS & PAV (Breads)
  // ==========================================
  {
    id: "bp-1",
    name: "Daily Fresh Pav",
    category: "Breads & Pav",
    image: "/images/optimized/products/breads-pav.webp",
    description: "Soft, pillowy fresh daily pav buns, baked morning and evening.",
    isFeatured: true
  },
  {
    id: "bp-2",
    name: "Sandwich Bread (Large)",
    category: "Breads & Pav",
    image: "/images/optimized/products/breads-bread-large-packet.webp",
    description: "Sliced soft white sandwich bread loaf for morning breakfasts.",
    isFeatured: false
  },
  {
    id: "bp-3",
    name: "Sandwich Bread (Small)",
    category: "Breads & Pav",
    image: "/images/optimized/products/breads-bread-small-packet.webp",
    description: "Freshly baked small sandwich bread loaf.",
    isFeatured: false
  },

  // ==========================================
  // 6. PIZZA & BURGER BUNS (Pizza - Burger)
  // ==========================================
  {
    id: "pb-1",
    name: "Fresh Burger Buns",
    category: "Pizza & Burger Buns",
    image: "/images/optimized/products/pizza-burger-burger-bun.webp",
    description: "Soft round sesame-topped burger buns.",
    isFeatured: false
  },
  {
    id: "pb-2",
    name: "Fresh Pizza Base",
    category: "Pizza & Burger Buns",
    image: "/images/optimized/products/pizza-burger-pizza-bass.webp",
    description: "Freshly baked soft pizza crust base ready for home baking.",
    isFeatured: false
  },

  // ==========================================
  // 7. SWEET PAV & DONUTS (Sweet Pav, Breads)
  // ==========================================
  {
    id: "sp-1",
    name: "Chocolate Glazed Doughnut",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/breads-chocolate-doughnut.webp",
    description: "Soft fried doughnut with rich dark chocolate frosting.",
    isFeatured: true
  },
  {
    id: "sp-2",
    name: "Traditional Fried Doughnut",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-fry-doughnut.webp",
    description: "Golden sugar-glazed classic fried doughnut.",
    isFeatured: false
  },
  {
    id: "sp-3",
    name: "Maska Doughnut",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-maska-doughnut.webp",
    description: "Soft doughnut with sweet butter topping.",
    isFeatured: false
  },
  {
    id: "sp-4",
    name: "Fresh Bun Maska",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-bun-maska.webp",
    description: "Soft sweet bakery bun generously loaded with butter.",
    isFeatured: false
  },
  {
    id: "sp-5",
    name: "Sweet Bun Pav",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-bun-pav.webp",
    description: "Soft sweet bun pav for morning and evening tea.",
    isFeatured: false
  },
  {
    id: "sp-6",
    name: "Sweet Jam Pav",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-jam-pav.webp",
    description: "Soft sweet bun filled with sweet fruit jam.",
    isFeatured: false
  },
  {
    id: "sp-7",
    name: "Sweet Baked Naan (Large)",
    category: "Sweet Pav & Donuts",
    image: "/images/optimized/products/sweet-pav-sweet-naan-large.webp",
    description: "Traditional sweet baked naan with aromatic golden glaze.",
    isFeatured: false
  },

  // ==========================================
  // 8. SPECIAL DELIGHTS (Special Item)
  // ==========================================
  {
    id: "sd-1",
    name: "Special Coconut Macaroon (Makrum)",
    category: "Special Delights",
    image: "/images/optimized/products/special-item-special-makrum.webp",
    description: "Traditional crunchy coconut macaroon bakery delicacy.",
    isFeatured: false
  },
  {
    id: "sd-2",
    name: "Special Baked Rot",
    category: "Special Delights",
    image: "/images/optimized/products/special-item-special-rot.webp",
    description: "Traditional sweet semolina and dry fruit baked rot cake.",
    isFeatured: false
  },
  {
    id: "sd-3",
    name: "Special Coconut Cream Delight",
    category: "Special Delights",
    image: "/images/optimized/products/special-coconut-jam-cake-dish.webp",
    description: "Fluffy sponge delicacy coated in fragrant coconut with a fresh cream rosette topping.",
    isFeatured: true
  },
  {
    id: "sd-4",
    name: "Slice Cake Tray Packet (3 Pcs)",
    category: "Special Delights",
    image: "/images/optimized/products/slice-cake-tray-packet.webp",
    description: "Freshly baked and sealed pack of 3 golden, soft and delicious tea sponge cake slices.",
    isFeatured: true
  },
  {
    id: "sd-5",
    name: "Chocolate Doughnuts (Pack of 2)",
    category: "Special Delights",
    image: "/images/optimized/products/chocolate-doughnuts-pack-of-2.webp",
    description: "Twin pack of soft glazed doughnuts dipped in rich chocolate and topped with rainbow sprinkles.",
    isFeatured: true
  },
  {
    id: "sd-6",
    name: "Special Jam Swiss Roll",
    category: "Special Delights",
    image: "/images/optimized/products/special-swiss-roll-dish.webp",
    description: "Soft rolled vanilla sponge swirled with sweet fruit jam and coated in delicate coconut sugar crystals.",
    isFeatured: true
  }
];

export default products;
