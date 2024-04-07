import apiCall from "./api";

const PRODUCT_API = "/api/product";

export const getCurrentProduct = async (id) => {
  return await apiCall({
    url: `${PRODUCT_API}/${id}`,
    method: "get",
  });

};

export const fetchAllProducts = async () => {
  return await apiCall({
    url: `${PRODUCT_API}`,
    method: "get",
  });

};
export const updateCurrentProduct = async (product) => {
  return await apiCall({
    url: `${PRODUCT_API}/${product._id}`,
    method: "put",
    data: product,
  });
};

export const createProduct = async (newProduct) => {
  return await apiCall({
    url: `${PRODUCT_API}`,
    method: "post",
    data: newProduct,
  });
};
