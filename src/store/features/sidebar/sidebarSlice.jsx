import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        show: false
    },
    reducers: {
        Slider: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { Slider } = sidebarSlice.actions

export default sidebarSlice.reducer