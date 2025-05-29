import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";
import {Profile} from "entities/Profile";
import {updateProfileData} from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
    error: '',
    isLoading: false,
    isReadonly: true
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsReadonly(state, action: PayloadAction<boolean>) {
            state.isReadonly = action.payload;
        },
        undoChanges(state) {
            state.formData = state.profileData;
        },
        updateProfile(state, action: PayloadAction<Partial<Profile>>) {
            if (!state.formData) return;

            state.formData = {
                ...state.formData,
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder
            // fetchProfileData
            .addCase(fetchProfileData.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profileData = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // updateProfileData
            .addCase(updateProfileData.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profileData = action.payload;
                state.formData = action.payload;
                state.isReadonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: profileReducer,
    actions: profileActions
} = profileSlice;