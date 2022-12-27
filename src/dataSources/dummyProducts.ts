import { Product } from "../models/Product";

const commonProduct = {
  image:
    "https://replit.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://storage.googleapis.com/replit/images/1664482257238_8286854f8e0f432330b6f9998f1660df.jpeg",
  location: "Surabaya",
};

export const dummyProducts: Product[] = [
  {
    id: "001",
    name: "Beras",
    price: 15000,
    ...commonProduct,
  },
  {
    id: "002",
    name: "Keju",
    price: 12000,
    ...commonProduct,
  },
  {
    id: "003",
    name: "Minyak Goreng",
    price: 32000,
    ...commonProduct,
  },
];
