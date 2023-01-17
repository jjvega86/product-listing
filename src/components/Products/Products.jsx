import React from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
