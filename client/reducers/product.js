const initialData = {
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
    image: "",
    category: "Choose...",
  };

const product = (state = initialData, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return action.product;
  
    case "CREATE":
      return action.payload;
    case "UPDATE":
      return action.payload;
    default:
      return state;
  }
}

export default product;