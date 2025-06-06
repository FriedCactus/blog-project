import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "entities/Article";

export const fetchArticles = createAsyncThunk<
    Article[],
    undefined,
    ThunkConfig<string>
>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Ошибка при получении статей');
        }
    }
);