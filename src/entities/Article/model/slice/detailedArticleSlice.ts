import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DetailedArticleSchema} from "../types/detailedArticleSchema";
import {fetchArticleById} from "../services/fetchArticleById/fetchArticleById";
import {Article} from "../types/article";

const initialState: DetailedArticleSchema = {
    isLoading: false
};

const detailedArticleSlice = createSlice({
    name: 'detailedArticle',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.article = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: detailedArticleReducer,
} = detailedArticleSlice;