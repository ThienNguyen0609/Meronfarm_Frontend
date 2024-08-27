import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/product/productApi.js";
import { meronfarmApi } from "./features/meronfarm/meronfarmApi.js";
import sidebarReducer from './features/sidebar/sidebarSlice.js'
import pathReducer from "./features/path/pathSlice.js";
import toastifyReducer from "./features/toastify/toastifySlice.js"

export default configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [meronfarmApi.reducerPath]: meronfarmApi.reducer,
        show: sidebarReducer,
        path: pathReducer,
        toast: toastifyReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, meronfarmApi.middleware),
})