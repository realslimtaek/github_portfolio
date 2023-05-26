import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    repo:[]
}

export const setUserState = createSlice({
    name: "realslimtaek",
    initialState: initialState,
    reducers: {
        SETUSEREMAIL: (state, action) => {
            state.userName = action.payload;
            console.log(state.userName);
        },
        SETUSERREPO: (state, action) => {
            state.repo = action.payload;
        },
    }
})

export const {SETUSEREMAIL, SETUSERREPO} = setUserState.actions;

export default setUserState.reducer;