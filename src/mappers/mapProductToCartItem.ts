import { CartItem } from "../models/Cart";
import { Product } from "../models/Product";

export default function mapProductToCartItem(product: Product): CartItem {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    amount: 1,
  };
}
