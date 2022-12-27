import * as React from "react";

import Cart from "../components/Cart";
import { CartContext } from "../components/Cart/CartContext";
import ProductCompartment from "../components/ProductCompartment";

export default function AppWithCartContext() {
  const { cartItems, addToCart, decreaseAmount, increaseAmount, removeItem } =
    React.useContext(CartContext);

  return (
    <main>
      <ProductCompartment addToCart={addToCart} />
      <hr />
      <Cart
        items={cartItems}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
        removeItem={removeItem}
      />
    </main>
  );
}
