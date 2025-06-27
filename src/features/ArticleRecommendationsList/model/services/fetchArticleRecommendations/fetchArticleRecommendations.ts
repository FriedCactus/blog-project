import {createAsyncThunk} from "@reduxjs/toolkit";
import {Article} from "entities/Article";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {
    getArticleRecommendationsListLimit
} from "../../selectors/getArticleRecommendationsListLimit/getArticleRecommendationsListLimit";

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    undefined,
    ThunkConfig<string>
>('articleRecommendationsList/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const _limit = getArticleRecommendationsListLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Ошибка при получении рекомендуемых статей');
        }
    });