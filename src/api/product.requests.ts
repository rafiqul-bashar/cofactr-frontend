import axios from "axios";

const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  } catch (error) {
    return error;
  }
};

const fetchCategories = async () => {
  try {
    // https://fakestoreapi.com/products/categories
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchCategories, fetchProducts };
