import * as React from "react";

import { CartContext } from "../components/Cart/CartContext";
import Main from "../components/Main";

export default function AppWithCartContext() {
  const { cartItems, addToCart, decreaseAmount, increaseAmount, removeItem } =
    React.useContext(CartContext);

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
