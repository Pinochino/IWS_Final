import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
}

const paymentSlicer = createSlice({
    name: 'payment',
    initialState,
    reducers:  {
        paymentStart: (state) => {
            state.loading = true;
        },
        paymentSuccess: (state, action) => {

        },
        paymentFail: (state, action) => {

        }
    }
});

export const {paymentStart, paymentSuccess, paymentFail} = paymentSlicer.actions
export const paymentReducer = paymentSlicer.reducer;