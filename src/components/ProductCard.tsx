import * as React from "react";

import { Product } from "../models/Product";

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard(props: Props) {
  const { product, onClick } = props;
  const { name, image, price, location } = product;

  const [showButton, setShowButton] = React.useState(false);

  return (
    <div
      onMouseOver={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      style={{
        margin: "0 8px",
        padding: "16px",
        border: "1px solid grey",
        borderRadius: 4,
      }}
    >
      <div>
        <img src={image} />
      </div>
      <h3>{name}</h3>
      <div>
        <p>Rp{price}</p>
        {showButton ? (
          <button onClick={() => onClick(product)}>Add To Cart</button>
        ) : (
          <p>{location}</p>
        )}
      </div>
    </div>
  );
}
