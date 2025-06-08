import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlesHasMore} from "../../selectors/getArticlesHasMore/getArticlesHasMore";
import {getArticlesIsLoading} from "../../selectors/getArticlesIsLoading/getArticlesIsLoading";
import {fetchArticles} from "../../services/fetchArticles/fetchArticles";
import {getArticlesPage} from "../../selectors/getArticlesPage/getArticlesPage";

export const fetchNextArticlesPage = createAsyncThunk<
    undefined,
    undefined,
    ThunkConfig<void>
>(
    'articles/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {dispatch, getState, rejectWithValue} = thunkAPI;

        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesIsLoading(getState());
        const page = getArticlesPage(getState());

        if (!hasMore || isLoading || !page) {
            return rejectWithValue();
        }

        dispatch(fetchArticles(page + 1));
    }
);