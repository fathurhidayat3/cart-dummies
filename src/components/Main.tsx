import * as React from "react";

import Cart from "./Cart";
import { CartState } from "./Cart/types";
import ProductCompartment from "./ProductCompartment";

interface Props extends CartState {}

export default function Main(props: Props) {
  const { cartItems, addToCart, decreaseAmount, increaseAmount, removeItem } =
    props;

  return (
    <main style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <ProductCompartment addToCart={addToCart} />
      </div>
      <div style={{ flex: 1 }}>
        <Cart
          items={cartItems}
          decreaseAmount={decreaseAmount}
          increaseAmount={increaseAmount}
          removeItem={removeItem}
        />
      </div>
    </main>
  );
}
