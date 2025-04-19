import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItemFromCart: (state, actions) => {
      state.items.filter((e) => e.id !== actions.payload.id);
    },

  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
