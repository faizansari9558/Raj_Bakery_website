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
    image: "/images/products/packet-items-twisted-khari.jpg",
    description: "Multi-layered, golden flaky puff pastry khari, baked fresh daily.",
    isFeatured: true
  },
  {
    id: "kh-2",
    name: "Long Twisted Khari",
    category: "Khari & Toast",
    image: "/images/products/packet-items-long-twisted-khari.jpg",
    description: "Special elongated crispy twisted puff sticks.",
    isFeatured: false
  },
  {
    id: "kh-3",
    name: "Zeera Puff Khari",
    category: "Khari & Toast",
    image: "/images/products/special-khari-zeera-khari.jpg",
    description: "Flaky puff pastry infused with roasted cumin seeds for a savoury aroma.",
    isFeatured: true
  },
  {
    id: "kh-4",
    name: "Samosa Khari",
    category: "Khari & Toast",
    image: "/images/products/special-khari-samosa-khari.jpg",
    description: "Triangular layered flaky puff khari with crisp texture.",
    isFeatured: false
  },
  {
    id: "kh-5",
    name: "Sugar Khari",
    category: "Khari & Toast",
    image: "/images/products/packet-items-sugar-khari.jpg",
    description: "Sweet caramelized crispy puff pastry khari.",
    isFeatured: false
  },
  {
    id: "kh-6",
    name: "Rich Mawa Toast",
    category: "Khari & Toast",
    image: "/images/products/special-toast-mava-toast.jpg",
    description: "Crunchy double-baked toast with authentic rich mawa aroma.",
    isFeatured: true
  },
  {
    id: "kh-7",
    name: "Sweet Milk Toast",
    category: "Khari & Toast",
    image: "/images/products/special-toast-milk-toast.jpg",
    description: "Crispy golden sweet milk rusk toast, perfect with morning chai.",
    isFeatured: false
  },
  {
    id: "kh-8",
    name: "Sponge Cake Toast",
    category: "Khari & Toast",
    image: "/images/products/special-toast-cake-toast.jpg",
    description: "Double-baked aromatic sponge cake into crispy sweet toast.",
    isFeatured: false
  },
  {
    id: "kh-9",
    name: "Tutti Frutti Toast",
    category: "Khari & Toast",
    image: "/images/products/packet-items-tuti-fruti-toast.jpg",
    description: "Crispy toast studded with colourful tutti frutti bits.",
    isFeatured: false
  },
  {
    id: "kh-10",
    name: "Baby Toast",
    category: "Khari & Toast",
    image: "/images/products/packet-items-baby-toast.jpg",
    description: "Bite-sized crispy mini toasts for snacking.",
    isFeatured: false
  },
  {
    id: "kh-11",
    name: "Long Toast",
    category: "Khari & Toast",
    image: "/images/products/packet-items-long-toast.jpg",
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
    image: "/images/products/special-shrewsbury-biscuit-dish.jpg",
    description: "Pune's famous buttery and melt-in-the-mouth Shrewsbury biscuits stamped with Raj Bakery seal.",
    isFeatured: true
  },
  {
    id: "bi-2",
    name: "Special Nankhatai",
    category: "Biscuits & Cookies",
    image: "/images/products/biscuit-nancate-biscuit.jpg",
    description: "Traditional crumbly cardamom and ghee nankhatai cookies.",
    isFeatured: true
  },
  {
    id: "bi-3",
    name: "Besan Nankhatai",
    category: "Biscuits & Cookies",
    image: "/images/products/special-item-besan-nancate.jpg",
    description: "Roasted gram flour nankhatai with rich aroma and soft crumb.",
    isFeatured: false
  },
  {
    id: "bi-4",
    name: "Choco-Chips Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/products/choco-chips-biscuit-dish.jpg",
    description: "Crunchy baked chocolate cookies loaded with dark chocolate chips.",
    isFeatured: true
  },
  {
    id: "bi-5",
    name: "Kaju Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/products/kaju-biscuit-dish.jpg",
    description: "Rich buttery biscuits topped with whole crunchy cashew nuts.",
    isFeatured: true
  },
  {
    id: "bi-6",
    name: "Tutti Frutti Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/products/fruit-biscuit-dish.jpg",
    description: "Golden butter cookies with red & green tutti frutti pieces.",
    isFeatured: true
  },
  {
    id: "bi-7",
    name: "Zeera Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/products/zeera-butter-biscuit-dish.jpg",
    description: "Golden savoury cumin seed butter biscuits, a tea-time classic.",
    isFeatured: true
  },
  {
    id: "bi-8",
    name: "Makhaniya Butter Biscuit",
    category: "Biscuits & Cookies",
    image: "/images/products/biscuit-makhaniya-butter.jpg",
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
    image: "/images/cakes/raj-bakery-butterscotch-birthday-cake.jpg",
    description: "Textured yellow butterscotch celebration cake with cream rosettes and jelly accents.",
    isFeatured: true
  },
  {
    id: "pc-2",
    name: "Chocolate Drip Birthday Cake",
    category: "Pastries & Cakes",
    image: "/images/cakes/raj-bakery-chocolate-drip-birthday-cake.jpg",
    description: "Celebration cake with rich dark chocolate drip, whipped cream rosettes, and cherry toppings.",
    isFeatured: true
  },
  {
    id: "pc-6",
    name: "Chocolate Cream Pastry",
    category: "Pastries & Cakes",
    image: "/images/products/pastry-chocolate-pastry.jpg",
    description: "Moist chocolate sponge slice layered with rich chocolate cream.",
    isFeatured: true
  },
  {
    id: "pc-7",
    name: "Butterscotch Pastry",
    category: "Pastries & Cakes",
    image: "/images/products/pastry-butterscotch-pastry.jpg",
    description: "Layers of vanilla sponge, butterscotch caramel sauce, and crunchy praline.",
    isFeatured: true
  },
  {
    id: "pc-8",
    name: "Strawberry Jam Cake",
    category: "Pastries & Cakes",
    image: "/images/products/jam-cake-single.jpg",
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
    image: "/images/products/cream-rolls-cream-roll.jpg",
    description: "Golden, crispy puff pastry cone generously filled with sweet vanilla cream.",
    isFeatured: true
  },
  {
    id: "cr-2",
    name: "Chocolate Cream Roll",
    category: "Cream Rolls",
    image: "/images/products/cream-rolls-chocolate-roll.jpg",
    description: "Flaky pastry roll loaded with smooth chocolate cream.",
    isFeatured: true
  },
  {
    id: "cr-3",
    name: "Soft Cream Roll Packet",
    category: "Cream Rolls",
    image: "/images/products/cream-rolls-soft-cream-roll-packet.jpg",
    description: "Pack of soft fresh cream rolls for family snacking.",
    isFeatured: false
  },
  {
    id: "cr-4",
    name: "Cream Roll Packet",
    category: "Cream Rolls",
    image: "/images/products/cream-rolls-cream-roll-packet.jpg",
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
    image: "/images/products/breads-pav.jpg",
    description: "Soft, pillowy fresh daily pav buns, baked morning and evening.",
    isFeatured: true
  },
  {
    id: "bp-2",
    name: "Sandwich Bread (Large)",
    category: "Breads & Pav",
    image: "/images/products/breads-bread-large-packet.jpg",
    description: "Sliced soft white sandwich bread loaf for morning breakfasts.",
    isFeatured: false
  },
  {
    id: "bp-3",
    name: "Sandwich Bread (Small)",
    category: "Breads & Pav",
    image: "/images/products/breads-bread-small-packet.jpg",
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
    image: "/images/products/pizza-burger-burger-bun.jpg",
    description: "Soft round sesame-topped burger buns.",
    isFeatured: false
  },
  {
    id: "pb-2",
    name: "Fresh Pizza Base",
    category: "Pizza & Burger Buns",
    image: "/images/products/pizza-burger-pizza-bass.jpg",
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
    image: "/images/products/breads-chocolate-doughnut.jpg",
    description: "Soft fried doughnut with rich dark chocolate frosting.",
    isFeatured: true
  },
  {
    id: "sp-2",
    name: "Traditional Fried Doughnut",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-fry-doughnut.jpg",
    description: "Golden sugar-glazed classic fried doughnut.",
    isFeatured: false
  },
  {
    id: "sp-3",
    name: "Maska Doughnut",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-maska-doughnut.jpg",
    description: "Soft doughnut with sweet butter topping.",
    isFeatured: false
  },
  {
    id: "sp-4",
    name: "Fresh Bun Maska",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-bun-maska.jpg",
    description: "Soft sweet bakery bun generously loaded with butter.",
    isFeatured: false
  },
  {
    id: "sp-5",
    name: "Sweet Bun Pav",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-bun-pav.jpg",
    description: "Soft sweet bun pav for morning and evening tea.",
    isFeatured: false
  },
  {
    id: "sp-6",
    name: "Sweet Jam Pav",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-jam-pav.jpg",
    description: "Soft sweet bun filled with sweet fruit jam.",
    isFeatured: false
  },
  {
    id: "sp-7",
    name: "Sweet Baked Naan (Large)",
    category: "Sweet Pav & Donuts",
    image: "/images/products/sweet-pav-sweet-naan-large.jpg",
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
    image: "/images/products/special-item-special-makrum.jpg",
    description: "Traditional crunchy coconut macaroon bakery delicacy.",
    isFeatured: false
  },
  {
    id: "sd-2",
    name: "Special Baked Rot",
    category: "Special Delights",
    image: "/images/products/special-item-special-rot.jpg",
    description: "Traditional sweet semolina and dry fruit baked rot cake.",
    isFeatured: false
  },
  {
    id: "sd-3",
    name: "Special Coconut Cream Delight",
    category: "Special Delights",
    image: "/images/products/special-coconut-jam-cake-dish.jpg",
    description: "Fluffy sponge delicacy coated in fragrant coconut with a fresh cream rosette topping.",
    isFeatured: true
  },
  {
    id: "sd-4",
    name: "Slice Cake Tray Packet (3 Pcs)",
    category: "Special Delights",
    image: "/images/products/slice-cake-tray-packet.jpg",
    description: "Freshly baked and sealed pack of 3 golden, soft and delicious tea sponge cake slices.",
    isFeatured: true
  },
  {
    id: "sd-5",
    name: "Chocolate Doughnuts (Pack of 2)",
    category: "Special Delights",
    image: "/images/products/chocolate-doughnuts-pack-of-2.jpg",
    description: "Twin pack of soft glazed doughnuts dipped in rich chocolate and topped with rainbow sprinkles.",
    isFeatured: true
  },
  {
    id: "sd-6",
    name: "Special Jam Swiss Roll",
    category: "Special Delights",
    image: "/images/products/special-swiss-roll-dish.jpg",
    description: "Soft rolled vanilla sponge swirled with sweet fruit jam and coated in delicate coconut sugar crystals.",
    isFeatured: true
  }
];

export default products;
