import * as React from "react";
import shallow from "zustand/shallow";

import Cart from "../components/Cart";
import useCartStore from "../components/Cart/useCartStore";
import ProductCompartment from "../components/ProductCompartment";

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
    <main>
      <ProductCompartment addToCart={addToCart} />
      <Cart
        items={cartItems}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
        removeItem={(id, name) => {
          if (confirm(`Are you sure want to remove ${name}`) === true) {
            removeItem(id, name);
          }
        }}
      />
    </main>
  );
}
