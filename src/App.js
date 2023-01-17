import { useState, useEffect } from "react";
import data from "./data/data.json";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import SortToggle from "./components/SortToggle/SortToggle";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [allProducts, setAllProducts] = useState(
    data.products.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
  );
  const [sortedAscending, setSortedAscending] = useState(true);

  useEffect(() => {
    sortProducts();
  }, [sortedAscending]);

  const filterProducts = (category) => {
    let filteredProducts = [];
    if (category === "All Products") {
      filteredProducts = [...data.products];
    } else {
      filteredProducts = data.products.filter(
        (product) => product.category === category
      );
    }
    setAllProducts([...filteredProducts]);
  };

  const sortProducts = () => {
    let sorted = [];
    if (sortedAscending) {
      sorted = allProducts.slice().sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      sorted = allProducts.slice().sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    setAllProducts(sorted);
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="controls">
          <CategorySelect
            products={data.products}
            filterProducts={filterProducts}
          />
          <SortToggle
            currentSort={sortedAscending}
            setSort={setSortedAscending}
          />
        </div>
        {allProducts && <Products products={allProducts} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
