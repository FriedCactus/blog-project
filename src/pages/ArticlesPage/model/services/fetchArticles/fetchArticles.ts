import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {Article, ArticleSortField, ArticleType} from "entities/Article";
import {SortOrder} from "shared/types";
import {addQueryParams} from "shared/lib/url";
import {getArticlesLimit} from "../../selectors/getArticlesLimit/getArticlesLimit";
import {getSortOrder} from "../../selectors/getSortOrder/getSortOrder";
import {getSortField} from "../../selectors/getSortField/getSortField";
import {getSearchValue} from "../../selectors/getSearchValue/getSearchValue";
import {getArticlesPage} from "../../selectors/getArticlesPage/getArticlesPage";
import {getSelectedCategories} from "../../selectors/getSelectedCategories/getSelectedCategories";
import {ArticleSortParam} from "features/ArticlesSortSelector";

interface ApiParams {
    _expand: string,
    _page: number,
    _limit: number,
    // Sort, filter, search
    _sort?: ArticleSortField,
    _order?: SortOrder,
    q?: string,
    type_like?: ArticleType[]
}

interface FetchArticlesParams {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    FetchArticlesParams | undefined,
    ThunkConfig<string>
>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const page = getArticlesPage(getState());
        const limit = getArticlesLimit(getState());
        const sortField = getSortField(getState());
        const sortOrder = getSortOrder(getState());
        const searchValue = getSearchValue(getState());
        const selectedCategories = getSelectedCategories(getState());

        addQueryParams({
            [ArticleSortParam.FIELD]: sortField,
            [ArticleSortParam.ORDER]: sortOrder,
            [ArticleSortParam.SEARCH]: searchValue,
            [ArticleSortParam.TYPE]: selectedCategories
        });

        const params: ApiParams = {
            _expand: 'user',
            _page: page ?? 1,
            _limit: limit ?? 4,
        };

        if (sortField) params._sort = sortField;
        if (sortOrder) params._order = sortOrder;
        if (searchValue) params.q = searchValue;
        if (selectedCategories.length) params.type_like = selectedCategories;

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Ошибка при получении статей');
        }
    }
);