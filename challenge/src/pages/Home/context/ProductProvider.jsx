import { useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { ProductReducer } from "./ProductReducer";

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(ProductReducer, []);

  const deleteItem = (product) => {
    dispatch({
      type: "deleteItem",
      payload: product,
    });
  };
  const setState = (products) => {
    dispatch({
      type: "setState",
      payload: products,
    });
  };
  const values = {
    state: state,
    deleteItem: deleteItem,
    setState: setState,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
