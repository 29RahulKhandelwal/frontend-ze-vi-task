import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        ProductData:null,
    },
    reducers:{
        Products(state,action){
            state.ProductData=action.payload
        }
    }
});

export const productAction=productSlice.actions;
export default productSlice;