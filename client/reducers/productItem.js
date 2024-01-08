const initialData = {
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
    image: "",
    category: "Choose...",
  };

const productItem = (state = initialData, action) => {
  switch (action.type) {
    case "GET_PRODUCT_ITEM":
      return action.productItem; 
    case "UPDATE_PRODUCT_ITEM":
      return action.productItem;
    default:
      return state;
  }
}

export default productItem;