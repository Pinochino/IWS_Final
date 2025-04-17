import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
        openMenu: (state) => {
            state.isOpen = true;
        },
    }
});

export const { toggleMenu, closeMenu, openMenu } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;