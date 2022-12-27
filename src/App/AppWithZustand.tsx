import * as React from "react";
import shallow from "zustand/shallow";

import useCartStore from "../components/Cart/useCartStore";
import Main from "../components/Main";

export default function AppWithZustand() {
  const { cartItems, addToCart, decreaseAmount, increaseAmount, removeItem } =
    useCartStore(
      (state) => ({
        cartItems: state.cartItems,
        addToCart: state.addToCart,
        decreaseAmount: state.decreaseAmount,
        increaseAmount: state.increaseAmount,
        removeItem: state.removeItem,
      }),
      shallow
    );

  return (
    <Main
      cartItems={cartItems}
      addToCart={addToCart}
      decreaseAmount={decreaseAmount}
      increaseAmount={increaseAmount}
      removeItem={removeItem}
    />
  );
}
