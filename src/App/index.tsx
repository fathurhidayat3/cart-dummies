import * as React from "react";

import AppWithCartContext from "./AppWithContext";
import AppWithPassingDownProps from "./AppWithPassingDownProps";
import AppWithReducer from "./AppWithReducer";
import CartContextProvider from "../components/Cart/CartContext";

export default function App() {
  //   return <AppWithPassingDownProps />;

  // return (
  //   <CartContextProvider>
  //     <AppWithCartContext />
  //   </CartContextProvider>
  // );

  return <AppWithReducer />;
}
