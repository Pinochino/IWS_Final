import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlists: [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlistItem: (state, actions) => {
            state.wishlists.push(actions.payload);
        },
        removeWishlitItem: (state, actions) => {

        }
    }
})

export const {addWishlistItem, removeWishlitItem} = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;