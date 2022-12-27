import * as React from "react";
import { useAtom } from "jotai";

import Main from "../../components/Main";
import { cartItemsAtom } from ".";
import {
  useAddToCart,
  useDecreaseAmount,
  useIncreaseAmount,
  useRemoveItem,
} from "./utils";

export default function AppWithJotaiView() {
  const [cartItems] = useAtom(cartItemsAtom);
  const addToCart = useAddToCart();
  const decreaseAmount = useDecreaseAmount();
  const increaseAmount = useIncreaseAmount();
  const removeItem = useRemoveItem();

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
