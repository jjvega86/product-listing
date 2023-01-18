import React from "react";
import "./Product.css";

import StarRating from "../StarRating/StarRating";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={`${product.thumbnail}`} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="product-regular">{product.brand}</p>
        <p className="product-regular">{product.category}</p>
        <p className={product.stock < 20 ? "low-stock" : "regular-stock"}>
          {product.stock} in stock
        </p>
      </div>
      <StarRating rating={product.rating} />
    </div>
  );
};

export default Product;
