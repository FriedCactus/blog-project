import {createAsyncThunk} from "@reduxjs/toolkit";
import type {ThunkConfig} from "app/providers/StoreProvider";
import {ArticleComment} from "../../../types/articleComment";

export const fetchCommentsByArticleId = createAsyncThunk<
    ArticleComment[],
    string,
    ThunkConfig<string>
>(
    'detailedArticleComments/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<ArticleComment[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch {
            return rejectWithValue('Ошибка при получении комментариев');
        }
    }
);