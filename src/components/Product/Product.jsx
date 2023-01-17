import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img width={200} src={product.thumbnail} alt={`${product.thumbnail}`} />
      <h2>{product.title}</h2>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.rating} / 5</p>
    </div>
  );
};

export default Product;
