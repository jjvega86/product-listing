import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={`${product.thumbnail}`} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.rating} / 5</p>
      </div>
    </div>
  );
};

export default Product;
