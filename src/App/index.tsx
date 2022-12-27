import * as React from "react";

import AppWithContext from "./AppWithContext";
import AppWithPassingDownProps from "./AppWithPassingDownProps";
import AppWithReducer from "./AppWithReducer";
import CartContextProvider from "../components/Cart/CartContext";
import AppWithZustand from "./AppWithZustand";

interface Props {
  title: string;
  children: React.ReactNode;
}

function AppCompartment(props: Props) {
  const { title, children } = props;

  return (
    <div style={{ paddingBottom: 20 }}>
      <h3>{title}</h3>
      {children}
      <div style={{ marginTop: 20 }}>
        <hr />
      </div>
    </div>
  );
}

interface AppCompartmentConfig {
  title: string;
  children: React.ReactNode;
}

const appCompartmentConfigs: AppCompartmentConfig[] = [
  { title: "With Passing Down Props", children: <AppWithPassingDownProps /> },
  {
    title: "With Context",
    children: (
      <CartContextProvider>
        <AppWithContext />
      </CartContextProvider>
    ),
  },
  { title: "With Reducer", children: <AppWithReducer /> },
  { title: "With Zustand", children: <AppWithZustand /> },
];

export default function App() {
  return appCompartmentConfigs.map((appCompartment) => (
    <AppCompartment
      key={appCompartment.title}
      title={appCompartment.title}
      children={appCompartment.children}
    />
  ));
}
