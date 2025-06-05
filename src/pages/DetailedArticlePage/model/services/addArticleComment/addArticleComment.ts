import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getUserAuthData} from "entities/User";
import {getDetailedArticleData} from "entities/Article";
import {
    fetchCommentsByArticleId
} from "pages/DetailedArticlePage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {ArticleComment} from "../../types/articleComment";

export const addArticleComment = createAsyncThunk<
    undefined,
    string,
    ThunkConfig<string>
>(
    'profile/addArticleComment',
    async (text, thunkAPI) => {
        const {
            extra, dispatch, rejectWithValue, getState
        } = thunkAPI;

        const user = getUserAuthData(getState());
        const article = getDetailedArticleData(getState());
        
        try {
            if (!text || !user?.id || !article?.id) {
                throw new Error();
            }

            const response = await extra.api.post<ArticleComment>("/comments", {
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