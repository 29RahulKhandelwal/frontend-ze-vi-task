import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{isSearchClicked:false},
    reducers:{
        toggle(state){
            state.isSearchClicked=!state.isSearchClicked;
        }
    }
});

export const searchAction=searchSlice.actions;
export default searchSlice;