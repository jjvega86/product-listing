import { useState } from "react";

function CategorySelect({ products, filterProducts }) {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [...new Set(products.map((product) => product.category))];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    filterProducts(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>{selectedOption.toUpperCase()}</p>
    </div>
  );
}

export default CategorySelect;
