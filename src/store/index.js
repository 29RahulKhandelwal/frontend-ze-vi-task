import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import filterSlice from "./filter-slice";

const store=configureStore({reducer:{search:searchSlice.reducer,filter:filterSlice.reducer}});

export default store;