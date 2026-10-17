import type { TranslationKey } from "@/i18n/messages";

export type Trader = {
  id: string;
  name: TranslationKey;
  avatar: "woman" | "man";
  role: TranslationKey;
  city: TranslationKey;
  quote: TranslationKey;
};

// Sample profiles and copy; replace with approved customer testimonials.
export const traders: Trader[] = [
  {
    "id": "jenny-wilson",
    "city": "traders.items.jenny-wilson.city",
    "name": "traders.items.jenny-wilson.name",
    "avatar": "woman",
    "role": "traders.items.jenny-wilson.role",
    "quote": "traders.items.jenny-wilson.quote"
  },
  {
    "id": "tom-kolt",
    "city": "traders.items.tom-kolt.city",
    "name": "traders.items.tom-kolt.name",
    "avatar": "man",
    "role": "traders.items.tom-kolt.role",
    "quote": "traders.items.tom-kolt.quote"
  },
  {
    "id": "dianne-russell",
    "city": "traders.items.dianne-russell.city",
    "name": "traders.items.dianne-russell.name",
    "avatar": "woman",
    "role": "traders.items.dianne-russell.role",
    "quote": "traders.items.dianne-russell.quote"
  },
  {
    "id": "jane-lee",
    "city": "traders.items.jane-lee.city",
    "name": "traders.items.jane-lee.name",
    "avatar": "woman",
    "role": "traders.items.jane-lee.role",
    "quote": "traders.items.jane-lee.quote"
  },
  {
    "id": "alex-chen",
    "city": "traders.items.alex-chen.city",
    "name": "traders.items.alex-chen.name",
    "avatar": "man",
    "role": "traders.items.alex-chen.role",
    "quote": "traders.items.alex-chen.quote"
  },
  {
    "id": "tom-hauser",
    "city": "traders.items.tom-hauser.city",
    "name": "traders.items.tom-hauser.name",
    "avatar": "man",
    "role": "traders.items.tom-hauser.role",
    "quote": "traders.items.tom-hauser.quote"
  }
];
