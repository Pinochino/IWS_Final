import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setSkeleton: (state, actions) => {
            state.isLoading = actions.payload;
        }
    }
})


export const {setSkeleton} = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;