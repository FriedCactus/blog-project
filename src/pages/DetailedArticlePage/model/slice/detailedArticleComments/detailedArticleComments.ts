import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {DetailedArticleCommentsSchema} from "../../types/detailedArticleCommentsSchema";
import {
    fetchCommentsByArticleId
} from '../../services/detailedArticleComments/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {ArticleComment} from '../../types/articleComment';
import {StateSchema} from "app/providers/StoreProvider";
import {
    addArticleComment
} from "../../services/detailedArticleComments/addArticleComment/addArticleComment";

const articleCommentsAdapter = createEntityAdapter<ArticleComment>();
const initialState: DetailedArticleCommentsSchema = articleCommentsAdapter.getInitialState({
    isLoading: false,
    isCommentSending: false,
});

const detailedArticleCommentsSlice = createSlice({
    name: 'detailedArticleComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchCommentsByArticleId
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                articleCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // addArticleComment
            .addCase(addArticleComment.pending, (state) => {
                state.commentSendingError = '';
                state.isCommentSending = true;
            })
            .addCase(addArticleComment.fulfilled, (state) => {
                state.isCommentSending = false;

            })
            .addCase(addArticleComment.rejected, (state, action) => {
                state.isCommentSending = false;
                state.commentSendingError = action.payload;
            })
        ;
    }
});

export const {
    reducer: detailedArticleCommentsReducer,
} = detailedArticleCommentsSlice;
export const getDetailedArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.detailedArticlePage?.comments ?? articleCommentsAdapter.getInitialState()
);