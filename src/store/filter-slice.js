import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"filter",
    initialState:{
        Brand:null,
        Price:null,
        Rating:null,
    },
    reducers:{
        BrandFilter(state,action){
            state.Brand=action.payload
        },
        PriceFilter(state,action){
            state.Price=action.payload
        },
        RatingFilter(state,action){
            state.Rating=action.payload
        }
    }
});

export const filterAction=filterSlice.actions;
export default filterSlice;