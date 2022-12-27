import * as React from "react";

import Cart from "../components/Cart";
import useCartReducer, {
  CartReducerActionKind,
} from "../components/Cart/useCartReducer";
import ProductCompartment from "../components/ProductCompartment";

export default function AppWithReducer() {
  const [state, dispatch] = useCartReducer();

  return (
    <main>
      <ProductCompartment
        addToCart={(product) =>
          dispatch({
            type: CartReducerActionKind.ADD_TO_CART,
            product,
          })
        }
      />
      <hr />
      <Cart
        items={state.items}
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
        removeItem={(id) => {
          if (confirm(`Are you sure want to remove ${name}`) === true) {
            dispatch({
              type: CartReducerActionKind.REMOVE_ITEM,
              productID: id,
            });
          }
        }}
      />
    </main>
  );
}
