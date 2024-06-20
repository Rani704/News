import React from 'react';
import "./Filter.css"
const Filter = ({ setCategory }) => {
  const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
