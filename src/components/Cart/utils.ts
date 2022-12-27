import { CartItem } from "../../models/Cart";

export function calculateCartTotalPrice(items: CartItem[]): string {
  let totalPrice = 0;

  items.map((item) => {
    totalPrice += item.price * item.amount;
  });

  return `Rp${totalPrice}`;
}
