import { businessInfo } from "../config/business.js";

/**
 * Clean and format phone number for WhatsApp international URL.
 * Removes spaces, +, -, brackets, and adds India's country code 91 if 10 digits.
 * 
 * Example:
 * "9558404024" -> "919558404024"
 * "7020812151" -> "917020812151"
 * "+91 9558404024" -> "919558404024"
 */
export const formatWhatsAppNumber = (phone) => {
  if (!phone) return "";
  const digits = String(phone).replace(/[^\d]/g, "");
  
  if (digits.length === 10) {
    return `91${digits}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits;
  }
  return digits;
};

/**
 * Construct pre-filled WhatsApp message based on enquiry type.
 */
export const buildWhatsAppMessage = (options = {}) => {
  const {
    type = "general",
    product = null,
    cake = null,
    itemName = "",
    category = "",
    name = "",
    phone = "",
    cakeType = "",
    occasion = "",
    date = "",
    quantity = "",
    message = "",
    contactName = ""
  } = options;

  // 1. Specific Product Enquiry
  if (type === "product" || product) {
    const pName = product?.name || itemName || "Bakery Product";
    const pCategory = product?.category || category || "Bakery Products";
    
    return `Hello Raj Bakery,\n\nI would like to enquire about this product.\n\nProduct: ${pName}\nCategory: ${pCategory}\n\nPlease provide more details about availability and price.\n\nThank you.`;
  }

  // 2. Specific Cake Enquiry
  if (type === "cake" || cake) {
    const cName = cake?.name || itemName || "Celebration Cake";
    const cCategory = cake?.category || category || "Special Cakes";

    return `Hello Raj Bakery,\n\nI would like to enquire about a cake.\n\nCake: ${cName}\nCategory: ${cCategory}\n\nPlease provide details about availability, customization and pricing.\n\nThank you.`;
  }

  // 3. Custom Cake Form / Modal Enquiry
  if (type === "custom" || type === "cake-modal") {
    const cType = cakeType || itemName || "Custom Celebration Cake";
    const cOccasion = occasion || "Celebration";
    const cDate = date || "Flexible";
    const cQty = quantity || "1 Cake";
    const cMsg = message ? `\n\nMessage:\n${message}` : "";

    return `Hello Raj Bakery,\n\nI would like to enquire about a cake.\n\nName: ${name || "Customer"}\nPhone: ${phone || "Not specified"}\nCake Type: ${cType}\nOccasion: ${cOccasion}\nPreferred Date: ${cDate}\nQuantity: ${cQty}${cMsg}\n\nPlease provide details.\n\nThank you.`;
  }

  // 4. Order Now / General Order Placement
  if (type === "order") {
    return `Hello Raj Bakery,\n\nI would like to place an order.\n\nPlease assist me with the order details.\n\nThank you.`;
  }

  // 5. Direct Person Contact (e.g. Riyasat, Tanveer, Nadeem)
  if (type === "direct-contact" && contactName) {
    return `Hello ${contactName},\n\nI am contacting Raj Bakery regarding an enquiry.\n\nPlease assist me.\n\nThank you.`;
  }

  // 6. Default General Enquiry
  return `Hello Raj Bakery,\n\nI would like to enquire about your fresh bakery products and celebration cakes.\n\nPlease provide details.\n\nThank you.`;
};

/**
 * Generate full WhatsApp URL with encoded message and target phone number.
 * Defaults to the centralized `businessInfo.enquiryWhatsApp`.
 */
export const createWhatsAppUrl = (options = {}) => {
  const targetNumber = options.targetPhone || businessInfo.enquiryWhatsApp;
  const formattedNumber = formatWhatsAppNumber(targetNumber);
  const message = buildWhatsAppMessage(options);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp directly in a new window/tab
 */
export const openWhatsAppEnquiry = (options = {}) => {
  const url = createWhatsAppUrl(options);
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Dedicated helper functions for cleaner component usage
 */
export const sendProductEnquiry = (product) => {
  openWhatsAppEnquiry({ type: "product", product });
};

export const sendCakeEnquiry = (cake) => {
  openWhatsAppEnquiry({ type: "cake", cake });
};

export const sendCustomCakeEnquiry = (formData) => {
  openWhatsAppEnquiry({ type: "custom", ...formData });
};

export const sendGeneralOrder = () => {
  openWhatsAppEnquiry({ type: "order" });
};

export const sendGeneralEnquiry = () => {
  openWhatsAppEnquiry({ type: "general" });
};

export const sendDirectPersonWhatsApp = (contact) => {
  openWhatsAppEnquiry({
    type: "direct-contact",
    contactName: contact.name,
    targetPhone: contact.phone
  });
};
