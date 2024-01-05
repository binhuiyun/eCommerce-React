import axios from "axios";

const PRODUCT_API = "http://localhost:4000/api/product";

export const getCurrentProduct = (id, dispatch) => {
   axios.get(`${PRODUCT_API}/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_PRODUCT",
        product: res.data,
      });
    })
};

export const updateCurrentProduct = (product, dispatch) => {
  axios.put(`${PRODUCT_API}/${product._id}`, product)
    .then((res) => {
      dispatch({
        type: "UPDATE",
        product: res.data,
      });
    })
};

export const createProduct = (product, dispatch) => {
    axios.post(PRODUCT_API, product)
        .then((res) => {
        dispatch({
            type: "CREATE",
            product: res.data,
        });
        })
    };