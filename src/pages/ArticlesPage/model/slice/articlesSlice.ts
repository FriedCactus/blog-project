import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticleListView} from "entities/Article";
import {ArticlesSchema} from "../types/articlesSchema";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchArticles} from "../services/fetchArticles/fetchArticles";
import {LOCAL_STORAGE_ARTICLES_PAGE_VIEW} from "shared/const";
import {fetchNextArticlesPage} from "../services/fetchNextArticlesPage/fetchNextArticlesPage";

const articlesAdapter = createEntityAdapter<Article>();
const initialState: ArticlesSchema = articlesAdapter.getInitialState({
    isLoading: false,
    view: ArticleListView.SMALL,
    page: 1,
    limit: 12,
    hasMore: true,
    _inited: false
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        initState(state) {
            const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW) as ArticleListView;

            state.view = view ?? ArticleListView.SMALL;
            state.limit = view === ArticleListView.SMALL ? 12 : 4;
            state._inited = true;
        },
        setView(state, action: PayloadAction<ArticleListView>) {
            state.view = action.payload;
            state.limit = action.payload === ArticleListView.SMALL ? 12 : 4;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            // fetchArticles
            .addCase(fetchArticles.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length >= state.limit;

            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // fetchNextArticlesPage
            .addCase(fetchNextArticlesPage.fulfilled, (state) => {
                state.page++;
            })
        ;
    }
});

export const {
    actions: articlesActions,
    reducer: articlesReducer
} = articlesSlice;
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    state => state.articles ?? articlesAdapter.getInitialState()
);