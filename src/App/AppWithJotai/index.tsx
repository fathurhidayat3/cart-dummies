// App splitted into View and some hooks
// to demonstrate jotai global state accessibility
import * as React from "react";
import { atom } from "jotai";

import { CartItem } from "../../models/Cart";
import AppWithJotaiView from "./AppWithJotaiView";

export const cartItemsAtom = atom<CartItem[]>([]);

export default function AppWithJotai() {
  return <AppWithJotaiView />;
}
