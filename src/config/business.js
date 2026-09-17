/**
 * Raj Bakery - Central Business & Contact Configuration
 * 
 * Centralized business details, contact persons, and WhatsApp enquiry routing.
 * To switch the active WhatsApp enquiry receiver from testing to Nadeem Ansari,
 * simply change `enquiryWhatsApp` to "7020812151".
 */

export const businessInfo = {
  name: "Raj Bakery",
  tagline: "Freshness Baked Into Every Moment",
  subTagline: "Welcome to Raj Bakery — your destination for fresh bakery favourites, handmade cookies, crispy khari, and custom celebration cakes made for every occasion.",

  // ============================================================
  // ACTIVE WHATSAPP ENQUIRY NUMBER (Testing Mode)
  // Switch to "7020812151" when testing is complete.
  // ============================================================
  enquiryWhatsApp: "9558404024",

  // Main Contact Person for Orders & Enquiries
  mainContact: {
    name: "Nadeem Ansari",
    phone: "7020812151",
    role: "Main Contact for Orders & Enquiries",
    isMainContact: true
  },

  // Official Bakery Contact Persons
  contacts: [
    {
      id: "riyasat",
      name: "Riyasat Ansari",
      phone: "8788950429",
      role: "Store Contact",
      isMainContact: false
    },
    {
      id: "tanveer",
      name: "Tanveer Ansari",
      phone: "8446632570",
      role: "Store Contact",
      isMainContact: false
    },
    {
      id: "nadeem",
      name: "Nadeem Ansari",
      phone: "7020812151",
      role: "Main Contact for Orders & Enquiries",
      isMainContact: true
    }
  ],

  // Social Media & General Links
  email: "",
  instagram: "",
  facebook: "",

  // Features / Value Propositions
  features: [
    {
      id: "fresh",
      title: "Freshly Prepared",
      description: "Baked fresh every day using time-tested recipes to ensure authentic taste and soft, delicious texture."
    },
    {
      id: "ingredients",
      title: "Quality Ingredients",
      description: "Carefully selected baking ingredients for wholesome bakery treats and delightful flavours."
    },
    {
      id: "taste",
      title: "Delicious Taste",
      description: "Rich flavours and mouth-watering delights that bring smiles to family and friends."
    },
    {
      id: "occasions",
      title: "Cakes for Every Occasion",
      description: "From birthdays to anniversaries and milestone events, crafted with celebration in mind."
    },
    {
      id: "custom",
      title: "Custom Cake Enquiries",
      description: "Share your theme or design preference, and our bakers will help create your celebration cake."
    },
    {
      id: "service",
      title: "Customer-Friendly Service",
      description: "Warm, welcoming neighbourhood bakery service at both of our Pune locations."
    }
  ]
};

// Aliases for backwards compatibility
export const businessConfig = businessInfo;
export default businessInfo;
