/* eslint-disable react/prop-types */
const Select = (props) => {
  return (
    <div className="row mt-4 mb-5 shadow-lg rounded">
      <select
        className="form-select bg-dark text-white "
        onChange={(e) => props.handleFilterChange(e.target.value)}
      >
        <option value="">Seleccione categoria...</option>
        {props.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
