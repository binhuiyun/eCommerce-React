import axios from "axios";

const PRODUCT_API = "http://localhost:4000/api/product";

export const getCurrentProduct = async (id) => {
  const response = await axios.get(`${PRODUCT_API}/${id}`);
  return response.data;
};

export const fetchAllProducts = async () => {
  const response = await axios.get(PRODUCT_API);
  return response.data;

};
export const updateCurrentProduct = async (product) => {
  const response = await axios.put(`${PRODUCT_API}/${product._id}`, product);
  return response.data;
};

export const createProduct = async (newProduct) => {
  const response = await axios.post(PRODUCT_API, newProduct);
  return response.data;
};
