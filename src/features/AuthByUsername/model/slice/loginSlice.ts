import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {LoginSchema} from "../types/loginSchema";
import {loginByUsername} from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
    error: "",
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, payload: PayloadAction<string>) {
            state.username = payload.payload;
        },
        setPassword(state, payload: PayloadAction<string>) {
            state.password = payload.payload;
        },
        clearState(state) {
            state.username = "";
            state.password = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    actions: loginActions,
    reducer: loginReducer,
} = loginSlice;