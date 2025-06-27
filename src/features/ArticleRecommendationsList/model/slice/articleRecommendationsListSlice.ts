import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {ArticleRecommendationsListSchema} from '../types/articleRecommendationsListSchema';
import {Article} from "entities/Article";
import {StateSchema} from "app/providers/StoreProvider";
import {
    fetchArticleRecommendations
} from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const articleRecommendationsAdapter = createEntityAdapter<Article>();
const initialState: ArticleRecommendationsListSchema = articleRecommendationsAdapter.getInitialState({
    isLoading: false,
    limit: 4
});

const articleRecommendationsListSlice = createSlice({
    name: 'articleRecommendationsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                articleRecommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: articleRecommendationsListReducer,
} = articleRecommendationsListSlice;
export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendationsList ?? articleRecommendationsAdapter.getInitialState()
);
