import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {type Profile, ValidateProfileError} from "entities/Profile";
import {validateProfileData} from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (profileId, thunkAPI) => {
        if (!profileId) {
            throw new Error();
        }

        const {extra, rejectWithValue, getState} = thunkAPI;
        const profileData = getState().profile?.formData;
        const errors = validateProfileData(profileData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profiles/${profileId}`, profileData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);