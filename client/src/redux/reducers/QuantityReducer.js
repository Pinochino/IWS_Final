import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1, 
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      state.quantity += action.payload;
    },
    decreaseQuantity: (state, action) => {
      state.quantity = Math.max(state.quantity - action.payload, 1); 
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = quantitySlice.actions;
export const quantityReducer = quantitySlice.reducer;
