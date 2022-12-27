import create from "zustand";

import mapProductToCartItem from "../../mappers/mapProductToCartItem";
import { CartState } from "./types";

export default create<CartState>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => {
      const { cartItems } = state;
      const newCartItem = mapProductToCartItem(product);

      if (cartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
        const newCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === newCartItem.id) {
            cartItem.amount = cartItem.amount + 1;
          }

          return cartItem;
        });

        return { cartItems: newCartItems };
      } else {
        return { cartItems: [...cartItems, newCartItem] };
      }
    }),
  decreaseAmount: (productID) =>
    set((state) => {
      const { cartItems } = state;

      const newCartItems = [...cartItems].map((cartItem) => {
        if (cartItem.id === productID && cartItem.amount > 0) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }

        return cartItem;
      });

      return { cartItems: newCartItems };
    }),
  increaseAmount: (productID) =>
    set((state) => {
      const { cartItems } = state;

      const newCartItems = [...cartItems].map((cartItem) => {
        if (cartItem.id === productID) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { cartItems: newCartItems };
    }),
  removeItem: (productID) =>
    set((state) => {
      const { cartItems } = state;

      const newCartItems = [...cartItems].filter(
        (cartItem) => cartItem.id !== productID
      );

      return { cartItems: newCartItems };
    }),
}));
