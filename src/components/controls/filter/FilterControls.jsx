function FilterControls({ types, filteredType, handleChange }) {
  return (
    <div>
      <select
        value={filteredType}
        onChange={(event) => handleChange(event.target.value)}
      >
        <option key="all" value="all">
          All
        </option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterControls;
