import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DetailedArticleCommentsSchema} from "../types/detailedArticleCommentsSchema";
import {fetchCommentsByArticleId} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {ArticleComment} from '../types/articleComment';
import {StateSchema} from "app/providers/StoreProvider";

const articleCommentsAdapter = createEntityAdapter<ArticleComment>();
const initialState: DetailedArticleCommentsSchema = articleCommentsAdapter.getInitialState({
    isLoading: false,
});

const detailedArticleCommentsSlice = createSlice({
    name: 'detailedArticleComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<ArticleComment[]>) => {
                state.isLoading = false;
                articleCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: detailedArticleCommentsReducer,
} = detailedArticleCommentsSlice;
export const getDetailedArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.detailedArticleComments ?? articleCommentsAdapter.getInitialState()
);