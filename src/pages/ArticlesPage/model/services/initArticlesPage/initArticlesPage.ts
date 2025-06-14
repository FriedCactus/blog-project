import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlesInited} from "../../selectors/getArticlesInited/getArticlesInited";
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from "../../services/fetchArticles/fetchArticles";
import {ArticleSortField, ArticleType} from "entities/Article";
import {SortOrder} from "shared/types";

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

        // Вынести все поля в features
        const initialSearchParams = {
            sortField: searchParams?.get("field") as ArticleSortField,
            sortOrder: searchParams?.get("order") as SortOrder,
            searchValue: searchParams?.get("search"),
            selectedCategories: searchParams?.get('type')?.split(',') as ArticleType[]
        };

        dispatch(articlesActions.initState(initialSearchParams));
        dispatch(fetchArticles());
    }
);