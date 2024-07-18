import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/product/productApi.js";
import sidebarReducer from './features/sidebar/sidebarSlice.js'
import pathReducer from "./features/path/pathSlice.js";

export default configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        show: sidebarReducer,
        path: pathReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})