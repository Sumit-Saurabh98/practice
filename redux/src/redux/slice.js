import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) =>{
            state.value += action.payload
        },
        clearCart: (state) =>{
            state.value = 0
        }
    }
})

export const {addItem, clearCart} = addToCart.actions
export default addToCart.reducer