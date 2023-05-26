import axios from "axios";

const API_URL = "https://dummyjson.com/";

const ProductService = () => {
  const getAll = async (limit = 10, skip = 0) => {
    try {
      let response = await axios.get(
        API_URL + `products?limit=${limit}&skip=${skip}`
      );
      return response.data;
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const get = async (id) => {
    try {
      let response = await axios.get(API_URL + `products/${id}`);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return {
    getAll,
    get,
  };
};

export default ProductService();
