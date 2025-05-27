import {createSlice} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    error: '',
    isLoading: false,
    isReadonly: true
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: profileReducer,
    actions: profileActions
} = profileSlice;