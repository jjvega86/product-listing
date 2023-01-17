import React from "react";
import "./Product.css";

import StarRating from "../StarRating/StarRating";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={`${product.thumbnail}`} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
};

export default Product;
