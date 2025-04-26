import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createProduct: {
    loading: false,
    error: null,
    product: null,
  },
  getAllProducts: {
    loading: false,
    error: null,
    product: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductStart: (state) => {
      state.createProduct.loading = true;
    },
    createProductSuccess: (state, actions) => {
      state.createProduct.loading = false;
      state.createProduct.product = actions.payload;
    },
    createProductFail: (state, actions) => {
      state.createProduct.loading = false;
      state.createProduct.error = actions.payload;
    },
    getAllProductStart: (state) => {
      state.getAllProducts.loading = true;
    },
    getAllProductSuccess: (state, actions) => {
      state.getAllProducts.loading = false;
      state.getAllProducts.product = actions.payload;
    },
    getAllProductFail: (state, actions) => {
      state.getAllProducts.loading = false;
      state.getAllProducts.error = actions.payload;
    },
  },
});

export const {
  createProductStart,
  createProductFail,
  createProductSuccess,
  getAllProductStart,
  getAllProductSuccess,
  getAllProductFail,
} = productSlice.actions; 
export const productReducer = productSlice.reducer;
