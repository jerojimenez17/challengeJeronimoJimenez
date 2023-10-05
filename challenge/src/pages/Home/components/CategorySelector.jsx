import { useEffect, useState } from "react";
import { fetchCategories } from "../../../services/CategoryService";

/* eslint-disable react/prop-types */
const CategorySelector = (props) => {
  const { handleFilterChange } = props;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <div className="row mt-4 mb-5 shadow-lg rounded">
      <select
        className="form-select bg-dark text-white "
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="">Seleccione categoria...</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
