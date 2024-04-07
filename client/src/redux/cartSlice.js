import { createSlice } from '@reduxjs/toolkit';
import { fetchCartThunk, addToCartThunk, decreaseOneThunk} from '../thunks/cart-thunk';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState:{ 
    items: [],
   
},
  reducers: {
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const selectedItem = state.items.find(item => item.id === itemId);

      if (selectedItem) {
        selectedItem.quantity++;
      }
      else {
        state.items.push({ id: itemId, quantity: 1 });       
      }
      
    },
    // addToCart(state, action) {
    //   const itemId = action.payload;
    //   const existingItem = state.items.find(item => item.id === itemId);
    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {
    //     state.items.push({ id: itemId, quantity: 1 });
    //   }
    // },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
 
    toggleIsOpen(state, action) {
      state.isOpen = action.payload;
     
    },
 
   
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const selectedItem = state.items.find(item => item.id === itemId);
      if (selectedItem) {
        if (selectedItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== itemId);
        } else {
          selectedItem.quantity--;
        }
      }
    }, 
  },
  extraReducers:(builder) => {
    builder.addCase(fetchCartThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addToCartThunk.fulfilled, (state, action) => {
      
      state.items = action.payload;
    });
    builder.addCase(decreaseOneThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
},
});

export const {removeFromCart, increaseQuantity, decreaseQuantity, toggleIsOpen} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
