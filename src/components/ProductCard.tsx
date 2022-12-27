import * as React from "react";

import { Product } from "../models/Product";

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard(props: Props) {
  const { product, onClick } = props;
  const { name, image, price, location } = product;

  return (
    <div style={{ padding: 20 }}>
      <div>
        <img src={image} />
      </div>
      <h3>{name}</h3>
      <div>
        <p>Rp{price}</p>
        <p>{location}</p>
      </div>
      <button onClick={() => onClick(product)}>Add To Cart</button>
    </div>
  );
}
