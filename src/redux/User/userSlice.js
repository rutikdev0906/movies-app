import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        error:false,
        isLoading:true
    },
    reducers: {
        userLoading: (state) => {
            state.error = false;
            state.isLoading = true
        },
        userError: (state) => {
            state.error = true;
            state.isLoading = false
        },
        userData: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
    },
})

export default userSlice;