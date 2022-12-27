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
      <h2>Recommended Products</h2>
      <div style={{ display: "flex", flexDirection: "row", padding: "20px 0" }}>
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
