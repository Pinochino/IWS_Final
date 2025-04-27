import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItem: {
    loading: false,
    error: null,
    cart: [],
  },
  updateItem: {
    loading: false,
    error: null,
    cart: [],
  },
  removeItem: {
    loading: false,
    error: null,
    cart: [],
  },
  cart: {
    items: [],
    loading: false,
    error: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartStart: (state) => {
      state.addItem.loading = true;
    },
    addItemToCartSuccess: (state, actions) => {
      state.addItem.loading = false;
      state.addItem.cart.push(actions.payload); // Add the item to the addItem cart
    },
    addItemToCartFail: (state, actions) => {
      state.addItem.loading = false;
      state.addItem.error = actions.payload;
    },
    removeItemFromCartStart: (state, actions) => {
      // Ensure actions.payload contains an 'id' property
      if (actions.payload && actions.payload.id) {
        state.cart.items = state.cart.items.filter((item) => item.id !== actions.payload.id);
      }
    },
    removeItemFromCartSuccess: (state, actions) => {
      // Ensure actions.payload contains an 'id' property
      if (actions.payload && actions.payload.id) {
        state.cart.items = state.cart.items.filter((item) => item.id !== actions.payload.id);
      }
    },
    removeItemFromCartFail: (state, actions) => {
      state.cart.error = actions.payload; // Handle error if needed
    },
    
    updateItemFromCartStart: (state, actions) => {
      // Make sure to handle updates properly
      if (actions.payload && actions.payload.id) {
        // Implement your update logic here (e.g., updating quantity)
        state.cart.items = state.cart.items.map(item =>
          item.id === actions.payload.id ? { ...item, ...actions.payload } : item
        );
      }
    },
    updateItemFromCartSuccess: (state, actions) => {
      // Implement the success logic here
    },
    updateItemFromCartFail: (state, actions) => {
      state.cart.error = actions.payload; // Handle error if needed
    },
    fetchCartStart: (state) => {
      state.cart.loading = true;
    },
    fetchCartSuccess: (state, action) => {
      state.cart.loading = false;
      state.cart.items = action.payload;
    },
    fetchCartFail: (state, action) => {
      state.cart.loading = false;
      state.cart.error = action.payload;
    },
  },
});

export const {
  addItemToCartStart,
  addItemToCartSuccess,
  addItemToCartFail,
  removeItemFromCartFail,
  removeItemFromCartStart,
  removeItemFromCartSuccess,
  updateItemFromCartFail,
  updateItemFromCartStart,
  updateItemFromCartSuccess,
  fetchCartFail,
  fetchCartSuccess,
  fetchCartStart
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

