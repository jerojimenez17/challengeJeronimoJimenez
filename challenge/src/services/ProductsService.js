import axios from "axios";
export const fetchProducts = async () => {
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.get("https://fakestoreapi.com/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
