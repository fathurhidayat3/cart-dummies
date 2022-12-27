import * as React from "react";

import AppWithContext from "./AppWithContext";
import AppWithPassingDownProps from "./AppWithPassingDownProps";
import AppWithReducer from "./AppWithReducer";
import CartContextProvider from "../components/Cart/CartContext";
import AppWithZustand from "./AppWithZustand";
import AppWithJotai from "./AppWithJotai";

interface Props {
  title: string;
  children: React.ReactNode;
}

function AppCompartment(props: Props) {
  const { title, children } = props;

  const [expand, setExpand] = React.useState(true);

  return (
    <div style={{ paddingBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 16px",
          backgroundColor: "grey",
          borderRadius: 4,
        }}
      >
        <h3 style={{ color: "white" }}>{title}</h3>
        <button onClick={() => setExpand(!expand)}>
          {expand ? "Collapse" : "Expand"}
        </button>
      </div>
      {expand ? children : null}
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
  { title: "With Jotai", children: <AppWithJotai /> },
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
