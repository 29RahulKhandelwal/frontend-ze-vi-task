import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import filterSlice from "./filter-slice";
import productSlice from "./products-slice";

const store=configureStore({reducer:{search:searchSlice.reducer,filter:filterSlice.reducer,product:productSlice.reducer}});

export default store;