import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('product', async()=>{
    const res = await fetch("https://dummyjson.com/products")
    const prod = await res.json()

    return prod.products
})

const initialState = {
    products: [],
    status: "",
    error: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            state.products = action.payload,
            state.status = action.meta.requestStatus
        }),
        builder.addCase(fetchProduct.pending, (state, action)=>{
            state.status = action.meta.requestStatus
        }),
        builder.addCase(fetchProduct.rejected, (state, action)=>{
            state.status = action.meta.requestStatus,
            state.error = "Something went wrong!"
        })
    }
})

// export const {} = productSlice.actions
export default productSlice.reducer

