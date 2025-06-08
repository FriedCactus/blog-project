import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlesInited} from "../../selectors/getArticlesInited/getArticlesInited";
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from "../../services/fetchArticles/fetchArticles";

export const initArticlesPage = createAsyncThunk<
    void,
    undefined,
    ThunkConfig<undefined>
>(
    'articles/initArticlesPage',
    async (_, thunkAPI) => {
        const {dispatch, getState} = thunkAPI;
        const inited = getArticlesInited(getState());

        if (inited) return;

        dispatch(articlesActions.initState());
        dispatch(fetchArticles(1));
    }
);