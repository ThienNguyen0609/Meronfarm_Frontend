import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './features/sidebar/sidebarSlice'

export default configureStore({
    reducer: {
        show: sidebarReducer
    }
})