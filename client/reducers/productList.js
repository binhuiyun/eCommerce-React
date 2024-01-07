const initialState = [];    
const productList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [action.productList, ...state];
    case 'FETCH_ALL_PRODUCTS':
        return action.productList;
    case "SORT_PRODUCTS":
      return action.productList;
    default:
      return state;
  }
}

export default productList;