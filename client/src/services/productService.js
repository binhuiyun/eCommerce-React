import axios from "axios";
import { getProductItem, updateProductItem } from "../redux/productItemSlice";
import { getAllProducts, addProduct } from "../redux/productListSlice";

const PRODUCT_API = "http://localhost:4000/api/product";

export const getCurrentProduct = (id, dispatch) => {
  axios.get(`${PRODUCT_API}/${id}`).then((res) => {
    dispatch(getProductItem(res.data));
  });
};

export const fetchAllProducts = (dispatch) => {
  axios.get(PRODUCT_API).then((res) => {
    dispatch(getAllProducts(res.data));
  });
};
export const updateCurrentProduct = (product, dispatch) => {
  axios.put(`${PRODUCT_API}/${product._id}`, product).then((res) => {
    dispatch(updateProductItem(res.data));
  });
};

export const createProduct = (newProduct, dispatch) => {
  axios.post(PRODUCT_API, newProduct).then((res) => {
    dispatch(addProduct(res.data));
  });
};
