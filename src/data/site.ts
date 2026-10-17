import type { TranslationKey } from "@/i18n/messages";

export const contact = {
  "phone": "+959123456789",
  "phoneLabel": "09 123 456 789",
  "directions": "https://www.google.com/maps/search/?api=1&query=20.68278357223358%2C96.63067319484438",
  "mapEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.069662311796!2d96.63067319484438!3d20.68278357223358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cebb007656a10d%3A0x3f37c8318be7238f!2z4YCe4YCt4YCS4YC54YCT4YCt4YCV4YC94YCy4YCb4YCv4YC2!5e1!3m2!1sen!2sjp!4v1791789929686!5m2!1sen!2sjp"
};

export const navigation = [
  {
    "id": "home",
    "label": "navigation.home"
  },
  {
    "id": "about",
    "label": "navigation.about"
  },
  {
    "id": "products",
    "label": "navigation.products"
  },
  {
    "id": "traders",
    "label": "navigation.traders"
  },
  {
    "id": "contact",
    "label": "navigation.contact"
  }
] as const satisfies readonly { id: string; label: TranslationKey }[];
