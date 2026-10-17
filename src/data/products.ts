export const products = [
  {
    "id": "potatoes",
    "image": "/images/produce.jpg",
    "imagePosition": "0% center",
    "imageSize": "500% auto",
    "imageAlt": "products.items.potatoes.imageAlt",
    "tag": "products.items.potatoes.tag",
    "name": "products.items.potatoes.name",
    "subtitle": "products.items.potatoes.subtitle",
    "description": "products.items.potatoes.description"
  },
  {
    "id": "garlic",
    "image": "/images/produce.jpg",
    "imagePosition": "50% center",
    "imageSize": "500% auto",
    "imageAlt": "products.items.garlic.imageAlt",
    "tag": "products.items.garlic.tag",
    "name": "products.items.garlic.name",
    "subtitle": "products.items.garlic.subtitle",
    "description": "products.items.garlic.description"
  },
  {
    "id": "ginger",
    "image": "/images/produce.jpg",
    "imagePosition": "75% center",
    "imageSize": "500% auto",
    "imageAlt": "products.items.ginger.imageAlt",
    "tag": "products.items.ginger.tag",
    "name": "products.items.ginger.name",
    "subtitle": "products.items.ginger.subtitle",
    "description": "products.items.ginger.description"
  },
  {
    "id": "seasonal",
    "image": "/images/seasonal-produce.png",
    "imagePosition": "center",
    "imageSize": "cover",
    "imageAlt": "products.items.seasonal.imageAlt",
    "tag": "products.items.seasonal.tag",
    "name": "products.items.seasonal.name",
    "subtitle": "products.items.seasonal.subtitle",
    "description": "products.items.seasonal.description"
  }
] as const;

export type Product = (typeof products)[number];
