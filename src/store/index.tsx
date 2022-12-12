import React from "react";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
    showCart: false
}

// export interface CartState {
//     showCart: boolean,
//     cart: {}
//     // incrementAmount: number
// }

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        showCartFunc(state) {
            state.showCart = true
        },
        hideCart(state) {
            state.showCart = false
        }
    }
})


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})


export const cartActions = cartSlice.actions
export default store
