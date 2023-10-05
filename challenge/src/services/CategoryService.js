import axios from "axios";
export const fetchCategories = async () => {
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.get(
      import.meta.env.VITE_API_URL + "/categories",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
