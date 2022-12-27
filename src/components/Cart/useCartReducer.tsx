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
  cartItems: CartItem[];
}

function cartReducer(state: CartState, action: CartReducerAction): CartState {
  const { type, product, productID } = action;
  const { cartItems } = state;

  switch (type) {
    case CartReducerActionKind.ADD_TO_CART: {
      if (product) {
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
      }
      return state;
    }
    case CartReducerActionKind.DECREASE_AMOUNT: {
      if (productID) {
        const newCartItems = [...cartItems].map((cartItem) => {
          if (cartItem.id === productID && cartItem.amount > 0) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        });

        return { cartItems: newCartItems };
      }
      return state;
    }
    case CartReducerActionKind.INCREASE_AMOUNT: {
      if (productID) {
        const newCartItems = [...cartItems].map((cartItem) => {
          if (cartItem.id === productID) {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }

          return cartItem;
        });

        return { cartItems: newCartItems };
      }
      return state;
    }
    case CartReducerActionKind.REMOVE_ITEM: {
      if (productID) {
        const newCartItems = [...cartItems].filter(
          (cartItem) => cartItem.id !== productID
        );

        return { cartItems: newCartItems };
      }

      return state;
    }
    default: {
      return state;
    }
  }
}

const initialState: CartState = {
  cartItems: [],
};

export default function useCartReducer() {
  return React.useReducer(cartReducer, initialState);
}
