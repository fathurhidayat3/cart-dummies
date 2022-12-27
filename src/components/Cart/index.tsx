import * as React from "react";

import { CartItem } from "../../models/Cart";
import { calculateCartTotalPrice } from "./utils";

interface Props {
  items: CartItem[];
  decreaseAmount: (id: string) => void;
  increaseAmount: (id: string) => void;
  removeItem: (id: string, name: string) => void;
}

export default function Cart(props: Props) {
  const { items, decreaseAmount, increaseAmount, removeItem } = props;

  return (
    <div>
      <h2>Cart</h2>
      <div style={{ paddingBottom: 20 }}>
        {items.length > 0 ? (
          <ul>
            {items.map((item: CartItem) => {
              return (
                <li key={item.id} style={{ marginTop: 8 }}>
                  <h3>{item.name}</h3>
                  <div>
                    Rp{item.price} - {item.amount}pcs
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button onClick={() => decreaseAmount(item.id)}>-</button> |{" "}
                    <button onClick={() => increaseAmount(item.id)}>+</button> |{" "}
                    <button onClick={() => removeItem(item.id, item.name)}>
                      Remove Item ?
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "Cart is Empty"
        )}
      </div>
      <h3>Total Price</h3>
      {calculateCartTotalPrice(items)}
    </div>
  );
}
