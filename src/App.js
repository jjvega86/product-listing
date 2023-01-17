import { useState } from "react";
import data from "./data/data.json";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [allProducts, setAllProducts] = useState(data.products);

  const filterProducts = (category) => {
    let filteredProducts = [];
    if (category === "All Products") {
      filteredProducts = [...data.products];
    } else {
      filteredProducts = data.products.filter(
        (product) => product.category === category
      );
    }
    console.log(filteredProducts);
    setAllProducts([...filteredProducts]);
  };

  return (
    <>
      <NavBar />
      <main>
        <CategorySelect
          products={data.products}
          filterProducts={filterProducts}
        />
        {allProducts && <Products products={allProducts} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
