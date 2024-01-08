import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    toggleEdit: (state, action) => {
      return action.payload;
    },
  },
});

export const { toggleEdit } = editSlice.actions;
export default editSlice.reducer;
