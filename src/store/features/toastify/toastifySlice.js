import { createSlice } from "@reduxjs/toolkit";

export const toastifySlice = createSlice({
    name: 'toastify',
    initialState: {
        isShow: false,
        type: "",
        message: ""
    },
    reducers: {
        setToast: (state, action) => {
            state.isShow = action.payload.isShow
            state.type = action.payload.type
            state.message = action.payload.message
        }
    }
})

export const { setToast } = toastifySlice.actions

export default toastifySlice.reducer