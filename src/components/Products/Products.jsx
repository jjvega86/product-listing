import React from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
