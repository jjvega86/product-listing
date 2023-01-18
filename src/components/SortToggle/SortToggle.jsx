import React from "react";
import "./SortToggle.css";

const SortToggle = ({ currentSort, setSort }) => {
  return (
    <button className="sort-toggle" onClick={() => setSort(!currentSort)}>
      Change Sort
    </button>
  );
};

export default SortToggle;
