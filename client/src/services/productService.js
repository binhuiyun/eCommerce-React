import axios from "axios";

const PRODUCT_API = "http://localhost:4000/api/product";

export const getProductItem = (productItem) => (
  {
    type: "GET_PRODUCT_ITEM",
    productItem,
  }
);
export const getCurrentProduct = (id, dispatch) => {
   axios.get(`${PRODUCT_API}/${id}`)
    .then((res) => {
      dispatch(getProductItem(res.data));
    });

};

export const fetchAllProducts = (dispatch) => {
  axios.get(PRODUCT_API)
    .then((res) => {
      dispatch({
        type: "FETCH_ALL_PRODUCTS",
        productList: res.data,
      });
    })
}
export const updateCurrentProduct = (product, dispatch) => {
  axios.put(`${PRODUCT_API}/${product._id}`, product)
    .then((res) => {
      dispatch({
        type: "UPDATE_PRODUCT_ITEM",
        productItem: res.data,
      });
    })
};

export const createProduct = (newProduct, dispatch) => {
    axios.post(PRODUCT_API, newProduct)
        .then((res) => {
        dispatch({
            type: "ADD_PRODUCT",
            productList: res.data,
        });

        })
    };