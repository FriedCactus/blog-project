import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import type {Profile} from "entities/Profile";

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        if (!profileId) {
            throw new Error('Не указан id пользователя');
        }

        try {
            const response = await extra.api.get<Profile>(`/profiles/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Ошибка при получении данных профиля');
        }
    }
);