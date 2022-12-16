import React from "react";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
    showCart: false,
    cartItems: [],
    totalAmount: 0
}

const initProductsState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        showCartFunc(state) {
            state.showCart = true
        },
        hideCart(state) {
            state.showCart = false
        },
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.cartItems = state.cartItems.concat(action.payload)
                state.totalAmount += parseFloat(action.payload.price)

            } else {
                existingItem.qty++
                state.totalAmount += existingItem.qty * parseFloat(action.payload.price)

            }

        },
        removeFromCart(state, action) {
            var id = action.payload
            const existingItems = state.cartItems.find(item => item.id === id)
            if (existingItems.qty === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItems.qty--
            }
        }
    }
})


const productsSlice = createSlice({
    name: 'data',
    initialState: initProductsState,
    reducers: {
        addToData(state, action) {
            state.products = action.payload
        }
    }
})


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer
    }
})


export const productActions = productsSlice.actions
export const cartActions = cartSlice.actions
export default store
