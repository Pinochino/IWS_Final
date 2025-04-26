import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

const initialState = {
  login: { loading: false, user: null, error: null },
  register: { loading: false, user: null, error: null },
  getAllUsers: { loading: false, user: [], error: null },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerStart: (state) => { state.register.loading = true; },
    registerSuccess: (state, action) => {
      state.register.loading = false;
      state.register.user = action.payload;
    },
    registerFail: (state, action) => {
      state.register.loading = false;
      state.register.error = action.payload;
    },
    loginStart: (state) => { state.login.loading = true; },
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload;
    },
    loginFail: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
    },
    logout: (state) => { state.login.user = null; },
    getAllUsersStart: (state) => {
      if (!state.getAllUsers) state.getAllUsers = { loading: false, user: [], error: null };
      state.getAllUsers.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      if (!state.getAllUsers) state.getAllUsers = { loading: false, user: [], error: null };
      state.getAllUsers.loading = false;
      state.getAllUsers.user = action.payload;
    },
    getAllUsersFail: (state, action) => {
      if (!state.getAllUsers) state.getAllUsers = { loading: false, user: [], error: null };
      state.getAllUsers.loading = false;
      state.getAllUsers.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state) => {
      if (!state.getAllUsers) {
        state.getAllUsers = { loading: false, user: [], error: null };
      }
    });
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  registerStart,
  registerSuccess,
  registerFail,
  logout,
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFail,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
