import { useAtom } from "jotai";

import { cartItemsAtom } from ".";
import mapProductToCartItem from "../../mappers/mapProductToCartItem";
import { Product } from "../../models/Product";

export const useAddToCart = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  return (product: Product) => {
    const newCartItem = mapProductToCartItem(product);

    if (cartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === newCartItem.id) {
          cartItem.amount = cartItem.amount + 1;
        }

        return cartItem;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, newCartItem]);
    }
  };
};

export const useDecreaseAmount = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  return (id: string) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === id && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }

      return cartItem;
    });

    setCartItems(newCartItems);
  };
};

export const useIncreaseAmount = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  return (id: string) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }

      return cartItem;
    });

    setCartItems(newCartItems);
  };
};

export const useRemoveItem = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  return (id: string, name: string) => {
    if (confirm(`Are you sure want to remove ${name}`) === true) {
      const newCartItems = [...cartItems].filter(
        (cartItem) => cartItem.id !== id
      );

      setCartItems(newCartItems);
    }
  };
};
