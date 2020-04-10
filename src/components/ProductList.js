import React, { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../context/ProductState";

export const ProductList = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
