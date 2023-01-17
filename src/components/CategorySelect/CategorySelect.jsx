import { useState } from "react";
import "./CategorySelect.css";

function CategorySelect({ products, filterProducts }) {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "All Products",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    filterProducts(e.target.value);
  };

  return (
    <div className="category-select">
      <select onChange={(e) => handleChange(e)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;
