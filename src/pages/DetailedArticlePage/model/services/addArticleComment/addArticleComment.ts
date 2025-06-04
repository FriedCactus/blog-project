import {createAsyncThunk} from "@reduxjs/toolkit";
import {Comment} from "entities/Comment";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getUserAuthData} from "entities/User";
import {getDetailedArticleData} from "entities/Article";
import {
    fetchCommentsByArticleId
} from "pages/DetailedArticlePage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addArticleComment = createAsyncThunk<
    undefined,
    string,
    ThunkConfig<string>
>(
    'profile/addArticleComment',
    async (text, thunkAPI) => {
        if (!text) {
            throw new Error();
        }
        const {
            extra, dispatch, rejectWithValue, getState
        } = thunkAPI;

        const user = getUserAuthData(getState());
        const article = getDetailedArticleData(getState());

        if (!text || !user?.id || !article?.id) {
            throw new Error();
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                userId: user.id,
                articleId: article.id,
                text
            });

            if (!response.data) {
                throw new Error();
            }

            await dispatch(fetchCommentsByArticleId(article.id));
        } catch {
            return rejectWithValue("Ошибка при добавлении комментария");
        }
    }
);