const initialState = false;

const edit = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT':
      return action.payload;
    default:
      return state;
  }
}
export default edit;