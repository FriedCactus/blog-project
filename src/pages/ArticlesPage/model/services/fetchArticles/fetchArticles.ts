import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "entities/Article";
import {getArticlesLimit} from "../../selectors/getArticlesLimit/getArticlesLimit";

export const fetchArticles = createAsyncThunk<
    Article[],
    number | undefined,
    ThunkConfig<string>
>(
    'articles/fetchArticles',
    async (page, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const limit = getArticlesLimit(getState()) ?? 4;

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _page: page ?? 1,
                    _limit: limit
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