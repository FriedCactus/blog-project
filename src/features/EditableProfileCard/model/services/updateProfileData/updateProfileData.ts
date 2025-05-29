import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import type {Profile} from "entities/Profile";


export const updateProfileData = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const profileData = getState().profile?.formData;

        try {
            const response = await extra.api.put<Profile>('/profile', profileData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Ошибка при получении данных профиля');
        }
    }
);