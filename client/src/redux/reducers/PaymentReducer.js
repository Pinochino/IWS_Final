import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    payment: null,
    error: null
}

const paymentSlicer = createSlice({
    name: 'payment',
    initialState,
    reducers:  {
        paymentStart: (state) => {
            state.loading = true;
        },
        paymentSuccess: (state, action) => {
            state.loading = false,
            state.payment = action.payload;
        },
        paymentFail: (state, action) => {
            state.loading = false,
            state.error = action.payload;
        }
    }
});

export const {paymentStart, paymentSuccess, paymentFail} = paymentSlicer.actions
export const paymentReducer = paymentSlicer.reducer;