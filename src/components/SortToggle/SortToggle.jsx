import React from "react";

const SortToggle = ({ currentSort, setSort }) => {
  return <button onClick={() => setSort(!currentSort)}>Change Sort</button>;
};

export default SortToggle;
