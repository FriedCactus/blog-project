import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {User, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/const";

const initialState: UserSchema = {
    _inited: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
        clearAuthData(state) {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }

            state._inited = true;
        }
    }
});

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice;