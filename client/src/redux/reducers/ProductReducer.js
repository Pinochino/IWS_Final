import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getAllProductsNewArrival: {
    loading: false,
    error: null,
    products: [],
  },
  getProductById: {
    loading: false,
    error: null,
    product: null,
  },
  getAllProductsTopSeller: {
    loading: false,
    error: null,
    products: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProductsNewArrivalStart: (state) => {
      state.getAllProductsNewArrival.loading = true;
    },
    getAllProductsNewArrivalSuccess: (state, actions) => {
      state.getAllProductsNewArrival.loading = false;
      state.getAllProductsNewArrival.products.push(actions.payload);
    },
    getAllProductsNewArrivalFail: (state, actions) => {
      state.getAllProductsNewArrival.loading = false;
      state.getAllProductsNewArrival.error = actions.payload;
    },
    getProductByIdStart: (state) => {
      state.getProductById.loading = true;
    },
    getProductByIdSuccess: (state, actions) => {
      state.getProductById.loading = false;
      state.getProductById.product = actions.payload;
    },
    getProductByIdFail: (state, actions) => {
      state.getAllProducts.loading = false;
      state.getProductById.error = actions.payload;
    },
    getAllProductsTopSellerStart: (state) => {
      state.getAllProductsTopSeller.loading = true;
    },
    getAllProductsTopSellerSuccess: (state, actions) => {
      state.getAllProductsTopSeller.loading = false;
      state.getAllProductsTopSeller.products.push(actions.payload);
    },
    getAllProductsTopSellerFail: (state, actions) => {
      state.getAllProductsTopSeller.loading = false;
      state.getAllProductsTopSeller.error = actions.payload;
    },
  },
});

export const {
  getAllProductsNewArrivalStart,
  getAllProductsNewArrivalFail,
  getAllProductsNewArrivalSuccess,
  getProductByIdFail,
  getProductByIdStart,
  getProductByIdSuccess,
  getAllProductsTopSellerStart,
  getAllProductsTopSellerSuccess,
  getAllProductsTopSellerFail,
} = productSlice.actions;
export const productReducer = productSlice.reducer;
