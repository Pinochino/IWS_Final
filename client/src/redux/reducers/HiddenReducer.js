import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
    name: 'hidden',
    initialState: {
        hidden: false,
    },
    reducers: {
        makeHidden: (state) => {
            state.hidden = true;
        },
        makeVisible: (state) => {
            state.hidden = false;
        }
    }
})
export const hiddenReducer = hiddenSlice.reducer;
export const {makeHidden, makeVisible} = hiddenSlice.actions;