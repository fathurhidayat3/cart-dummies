import { CartItem } from "../../models/Cart";
import { Product } from "../../models/Product";

export interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  decreaseAmount: (id: string) => void;
  increaseAmount: (id: string) => void;
  removeItem: (id: string, name: string) => void;
}
