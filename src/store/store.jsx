import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/product/productApi.js";
import { addressApi } from "./features/address/addressApi.js";
import sidebarReducer from './features/sidebar/sidebarSlice.js'
import pathReducer from "./features/path/pathSlice.js";
import toastifyReducer from "./features/toastify/toastifySlice.js"

export default configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        show: sidebarReducer,
        path: pathReducer,
        toast: toastifyReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, addressApi.middleware),
})