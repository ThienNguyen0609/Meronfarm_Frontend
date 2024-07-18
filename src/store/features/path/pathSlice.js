import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pathName: ""
}

export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        setPathName: (state, action) => {
            state.pathName = action.payload
        }
    }
})

export const { setPathName } = pathSlice.actions

export default pathSlice.reducer