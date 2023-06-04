import {configureStore} from "@reduxjs/toolkit";
import userData from "./UserData";
import curRepo from "./CurRepo";
export const store = configureStore({
    reducer : {
        user:userData,
        repo:curRepo
    },
})