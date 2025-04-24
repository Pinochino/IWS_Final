import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
}

const orderSlicer = createSlice({
    name: 'payment',
    initialState,
    reducers:  {
        orderStart: (state) => {
            state.loading = true;
        },
        orderSuccess: (state, action) => {

        },
        orderFail: (state, action) => {

        }
    }
});

export const {orderStart, orderSuccess, orderFail} = orderSlicer.actions
export const orderReducer = orderSlicer.reducer;