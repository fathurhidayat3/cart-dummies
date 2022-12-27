import * as React from "react";
import { dummyProducts } from "../dataSources/dummyProducts";

import mapProductToCartItem from "../mappers/mapProductToCartItem";
import { CartItem } from "../models/Cart";
import { Product } from "../models/Product";
import ProductCard from "./ProductCard";

interface Props {
  addToCart: (product: Product) => void;
}

export default function ProductCompartment(props: Props) {
  const { addToCart } = props;

  return (
    <div>
      <h1>Recommended Products</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {dummyProducts.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onClick={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
