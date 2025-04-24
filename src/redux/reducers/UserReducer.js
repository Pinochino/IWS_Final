import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    loading: false,
    error: null,
    user: null,
  },
  register: {
    loading: false,
    error: null,
    user: null,
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
      (state.login.loading = false),
        (state.login.user = actions.payload),
        (state.login.error = null);
    },
    loginFail: (state, actions) => {
      (state.login.loading = false), (state.login.error = actions.payload);
    },
    registerStart: (state) => {
      state.register.loading = true;
    },
    registerSuccess: (state, actions) => {
      (state.register.loading = false),
        (state.register.user = actions.payload),
        (state.register.error = null);
    },
    registerFail: (state, actions) => {
      (state.register.loading = false), (state.error = actions.payload);
    },
  },
});

export const {
  loginStart,
  loginFail,
  loginSuccess,
  registerStart,
  registerFail,
  registerSuccess,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
