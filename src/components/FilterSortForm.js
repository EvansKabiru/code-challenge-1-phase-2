import React from "react";

function FilterSortForm({ greasedFilter, setGreasedFilter, sortBy, setSortBy }) {
  return (
    <div>
      <label>
        Greased Only:
        <input
          type="checkbox"
          checked={greasedFilter}
          onChange={() => setGreasedFilter(!greasedFilter)}
        />
      </label>
      <label>
        Sort By:
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortForm;
