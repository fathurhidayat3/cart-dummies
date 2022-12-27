import * as React from "react";

import useCartReducer, {
  CartReducerActionKind,
} from "../components/Cart/useCartReducer";
import Main from "../components/Main";

export default function AppWithReducer() {
  const [state, dispatch] = useCartReducer();

  return (
    <Main
      cartItems={state.cartItems}
      addToCart={(product) =>
        dispatch({
          type: CartReducerActionKind.ADD_TO_CART,
          product,
        })
      }
      decreaseAmount={(id) =>
        dispatch({
          type: CartReducerActionKind.DECREASE_AMOUNT,
          productID: id,
        })
      }
      increaseAmount={(id) =>
        dispatch({
          type: CartReducerActionKind.INCREASE_AMOUNT,
          productID: id,
        })
      }
      removeItem={(id, name) => {
        if (confirm(`Are you sure want to remove ${name}`) === true) {
          dispatch({
            type: CartReducerActionKind.REMOVE_ITEM,
            productID: id,
          });
        }
      }}
    />
  );
}
