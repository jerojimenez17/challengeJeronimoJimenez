export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "deleteItem":
      return state.filter((product) => product.id !== action.payload.id);
    case "setState":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
