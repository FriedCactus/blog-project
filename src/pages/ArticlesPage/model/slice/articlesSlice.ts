import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Article} from "entities/Article";
import {ArticlesSchema} from "../types/articles";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchArticles} from "../services/fetchArticles/fetchArticles";

const articlesAdapter = createEntityAdapter<Article>();
const initialState: ArticlesSchema = articlesAdapter.getInitialState({
    isLoading: false
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchArticles
            .addCase(fetchArticles.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: articlesReducer
} = articlesSlice;
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    state => state.articles ?? articlesAdapter.getInitialState()
);