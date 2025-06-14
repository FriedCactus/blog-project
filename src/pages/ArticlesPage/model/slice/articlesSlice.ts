import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticleListView, ArticleSortField, ArticleType} from "entities/Article";
import {ArticlesSchema} from "../types/articlesSchema";
import {StateSchema} from "app/providers/StoreProvider";
import {fetchArticles} from "../services/fetchArticles/fetchArticles";
import {LOCAL_STORAGE_ARTICLES_PAGE_VIEW} from "shared/const";
import {SortOrder} from "shared/types";

interface InitStateParams {
    sortField?: ArticleSortField | null;
    sortOrder?: SortOrder | null;
    searchValue?: string | null;
    selectedCategories?: ArticleType[] | null;
}

const articlesAdapter = createEntityAdapter<Article>();
const initialState: ArticlesSchema = articlesAdapter.getInitialState({
    isLoading: false,
    view: ArticleListView.SMALL,
    page: 1,
    limit: 12,
    hasMore: true,
    _inited: false,
    selectedCategories: []
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        initState(state, {payload}: PayloadAction<InitStateParams>) {
            const {sortOrder, sortField, searchValue, selectedCategories} = payload;
            const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW) as ArticleListView;

            if (sortOrder) state.sortOrder = sortOrder;
            if (sortField) state.sortField = sortField;
            if (searchValue) state.searchValue = searchValue;
            if (selectedCategories) state.selectedCategories = selectedCategories;

            state.view = view ?? ArticleListView.SMALL;
            state.limit = view === ArticleListView.SMALL ? 12 : 4;
            state._inited = true;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setView(state, action: PayloadAction<ArticleListView>) {
            state.view = action.payload;
            state.limit = action.payload === ArticleListView.SMALL ? 12 : 4;
            localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW, action.payload);
        },
        setSortField(state, action: PayloadAction<ArticleSortField>) {
            state.sortField = action.payload;
        },
        setSortOrder(state, action: PayloadAction<SortOrder>) {
            state.sortOrder = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSelectedCategories(state, action: PayloadAction<ArticleType[]>) {
            state.selectedCategories = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // fetchArticles
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;

                if (action.meta.arg?.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg?.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }

            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
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