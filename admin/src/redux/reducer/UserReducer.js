import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    loading: false,
    user: null,
    error: null,
  },
  register: {
    loading: false,
    user: null,
    error: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.loading = true;
    },
    loginSuccess: (state, actions) => {
      state.login.loading = false;
      state.login.user = actions.payload;
    },
    loginFail: (state, actions) => {
      state.login.loading = false;
      state.login.error = actions.payload;
    },
    registerStart: (state) => {
      state.login.loading = true;
    },
    registerSuccess: (state, actions) => {
      state.login.loading = false;
      state.login.user = actions.payload;
    },
    registerFail: (state, actions) => {
      state.login.loading = false;
      state.login.error = actions.payload;
    },
  },
});
export const {
  loginStart,
  loginFail,
  loginSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
