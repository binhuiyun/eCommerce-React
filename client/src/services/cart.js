import apiCall from "./api";

const CART_API = "/api/cart";

export const fetchCart = async (userID) => {
  return await apiCall({
    url: `${CART_API}?userID=${userID}`,
    method: "get",

  });
};

export const addToCart = async (data) => {
  console.log("addToCart",data)
  return await apiCall({
    url: `${CART_API}/add`,
    method: "post",
    data
  });
};

export const decreaseOne= async (data) => {
  return await apiCall({
    url: `${CART_API}/remove`,
    method: "post",
    data
  });
}