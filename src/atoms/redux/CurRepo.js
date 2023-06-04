import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    repo:[],
    readme:""
}

export const currentRepository = createSlice({
    name: "repo",
    initialState: initialState,
    reducers: {
        SETCURRENTREPO: (state, action) => {
            state.repo = action.payload;
            state.readme = action.payload.content;

        }
    }
})

export const {SETCURRENTREPO} = currentRepository.actions;

export default currentRepository.reducer;