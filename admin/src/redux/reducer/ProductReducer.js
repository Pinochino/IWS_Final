import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductStart: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state, actions) => {
      state.loading = false;
      state.product = actions.payload;
    },
    createProductFail: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
  },
});

export const {createProductStart, createProductFail, createProductSuccess} = productSlice.actions;
export const productReducer = productSlice.reducer;
