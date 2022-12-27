import * as React from "react";
import mapProductToCartItem from "../../mappers/mapProductToCartItem";
import { CartItem } from "../../models/Cart";
import { Product } from "../../models/Product";

export enum CartReducerActionKind {
  ADD_TO_CART = "ADD_TO_CART",
  DECREASE_AMOUNT = "DECREASE_AMOUNT",
  INCREASE_AMOUNT = "INCREASE_AMOUNT",
  REMOVE_ITEM = "REMOVE_ITEM",
}

interface CartReducerAction {
  type: CartReducerActionKind;
  product?: Product;
  productID?: string;
}

interface CartState {
  items: CartItem[];
}

function cartReducer(state: CartState, action: CartReducerAction): CartState {
  const { type, product, productID } = action;
  const { items } = state;

  switch (type) {
    case CartReducerActionKind.ADD_TO_CART: {
      if (product) {
        const newCartItem = mapProductToCartItem(product);

        if (items.some((cartItem) => cartItem.id === newCartItem.id)) {
          const newCartItems = items.map((cartItem) => {
            if (cartItem.id === newCartItem.id) {
              cartItem.amount = cartItem.amount + 1;
            }

            return cartItem;
          });

          return { items: newCartItems };
        } else {
          return { items: [...items, newCartItem] };
        }
      }
      return state;
    }
    case CartReducerActionKind.DECREASE_AMOUNT: {
      if (productID) {
        const newCartItems = [...items].map((cartItem) => {
          if (cartItem.id === productID && cartItem.amount > 0) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        });

        return { items: newCartItems };
      }
      return state;
    }
    case CartReducerActionKind.INCREASE_AMOUNT: {
      if (productID) {
        const newCartItems = [...items].map((cartItem) => {
          if (cartItem.id === productID) {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }

          return cartItem;
        });

        return { items: newCartItems };
      }
      return state;
    }
    case CartReducerActionKind.REMOVE_ITEM: {
      if (productID) {
        const newCartItems = [...items].filter(
          (cartItem) => cartItem.id !== productID
        );

        return { items: newCartItems };
      }

      return state;
    }
    default: {
      return state;
    }
  }
}

const initialState: CartState = {
  items: [],
};

export default function useCartReducer() {
  return React.useReducer(cartReducer, initialState);
}
