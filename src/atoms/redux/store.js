import {configureStore} from "@reduxjs/toolkit";
import userData from "./UserData";
export const store = configureStore({
    reducer : {
        user:userData
    },
})