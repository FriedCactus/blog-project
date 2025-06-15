import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Article} from "entities/Article";
import {DetailedArticleRecommendationsSchema} from '../../types/detailedArticleRecommendationsSchema';
import {StateSchema} from "app/providers/StoreProvider";
import {
    fetchArticleRecommendations
} from "../../services/detailedArticleRecommendations/fetchArticleRecommendations/fetchArticleRecommendations";

const articleRecommendationsAdapter = createEntityAdapter<Article>();
const initialState: DetailedArticleRecommendationsSchema = articleRecommendationsAdapter.getInitialState({
    isLoading: false,
    limit: 4
});

const detailedArticleRecommendationsSlice = createSlice({
    name: 'detailedArticleRecommendations',
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
    reducer: detailedArticleRecommendationsReducer
} = detailedArticleRecommendationsSlice;
export const getDetailedArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.detailedArticlePage?.recommendations ?? articleRecommendationsAdapter.getInitialState()
);