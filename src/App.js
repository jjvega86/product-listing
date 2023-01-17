import { useState } from "react";
import data from "./data/data.json";

import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [allProducts, setAllProducts] = useState(data.products);
  return (
    <>
      <NavBar />
      {allProducts && <Products products={allProducts} />}
      <Footer />
    </>
  );
}

export default App;
