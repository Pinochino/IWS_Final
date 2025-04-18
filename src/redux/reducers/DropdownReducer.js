// redux/reducers/DropdownReducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  activeMenu: null, // null | 'New & Feature' | 'SIRIES' | ...
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.isOpen = true;
      state.activeMenu = action.payload;
    },
    closeMenu: (state) => {
      state.isOpen = false;
      state.activeMenu = null;
    },
    toggleMenu: (state, action) => {
      if (state.activeMenu === action.payload) {
        state.isOpen = !state.isOpen;
      } else {
        state.isOpen = true;
        state.activeMenu = action.payload;
      }
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;
