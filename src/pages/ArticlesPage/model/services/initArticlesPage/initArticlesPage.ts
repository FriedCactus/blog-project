import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {SortOrder} from "shared/types";
import {ArticleSortParam} from "features/ArticlesSortSelector";
import {ArticleSortField, ArticleType} from "entities/Article";
import {getArticlesInited} from "../../selectors/getArticlesInited/getArticlesInited";
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from "../../services/fetchArticles/fetchArticles";

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams | undefined,
    ThunkConfig<undefined>
>(
    'articles/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {dispatch, getState} = thunkAPI;
        const inited = getArticlesInited(getState());

        if (inited) return;
        
        const initialSearchParams = {
            sortField: searchParams?.get(ArticleSortParam.FIELD) as ArticleSortField,
            sortOrder: searchParams?.get(ArticleSortParam.ORDER) as SortOrder,
            searchValue: searchParams?.get(ArticleSortParam.SEARCH),
            selectedCategories: searchParams?.get(ArticleSortParam.TYPE)?.split(',') as ArticleType[]
        };

        dispatch(articlesActions.initState(initialSearchParams));
        dispatch(fetchArticles());
    }
);