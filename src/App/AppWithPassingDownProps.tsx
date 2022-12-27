import * as React from "react";

import Cart from "../components/Cart";
import ProductCompartment from "../components/ProductCompartment";
import mapProductToCartItem from "../mappers/mapProductToCartItem";
import { CartItem } from "../models/Cart";
import { Product } from "../models/Product";

export default function AppWithPassingDownProps() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
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

  const handleDecreaseAmount = (id: string) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === id && cartItem.amount > 0) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }

      return cartItem;
    });

    setCartItems(newCartItems);
  };

  const handleIncreaseAmount = (id: string) => {
    const newCartItems = [...cartItems].map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }

      return cartItem;
    });

    setCartItems(newCartItems);
  };

  const handleRemoveItem = (id: string, name: string) => {
    if (confirm(`Are you sure want to remove ${name}`) === true) {
      const newCartItems = [...cartItems].filter(
        (cartItem) => cartItem.id !== id
      );

      setCartItems(newCartItems);
    }
  };

  return (
    <main>
      <ProductCompartment addToCart={handleAddToCart} />
      <Cart
        items={cartItems}
        decreaseAmount={handleDecreaseAmount}
        increaseAmount={handleIncreaseAmount}
        removeItem={handleRemoveItem}
      />
    </main>
  );
}
