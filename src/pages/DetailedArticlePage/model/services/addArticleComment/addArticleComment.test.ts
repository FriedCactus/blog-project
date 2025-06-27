import {addArticleComment} from "./addArticleComment";
import {TestAsyncThunk} from "shared/lib/tests";
import {articleCommentEntitiesMock} from "../../mocks/articleComment";
import {StateSchema} from "app/providers/StoreProvider";
import {userMock} from "entities/User";

const comment = articleCommentEntitiesMock["1"];
const state: DeepPartial<StateSchema> = {
    user: {
        authData: {
            id: "1",
            username: "",
            password: ""
        }
    },
    detailedArticle: {
        isLoading: false,
        article: {
            id: "1",
            title: "",
            img: "",
            views: 0,
            createdAt: "",
            type: [],
            blocks: [],
            userId: "",
            user: userMock
        }
    }
};

const commentText = 'Текст комментария';
const errorText = 'Ошибка при добавлении комментария';

describe("addArticleComment", () => {
    test('successful posting comment', async () => {
        const thunk = new TestAsyncThunk(addArticleComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({
            data: comment
        }));

        const result = await thunk.callThunk(commentText);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('error when no text comment', async () => {
        const thunk = new TestAsyncThunk(addArticleComment, state);

        const result = await thunk.callThunk('');

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(errorText);
    });

    test('error when no user id', async () => {
        const thunk = new TestAsyncThunk(addArticleComment, {
            ...state,
            user: {
                ...state.user,
                authData: {
                    ...state.user!.authData!,
                    id: "",
                }
            }
        });

        const result = await thunk.callThunk(commentText);

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(errorText);
    });

    test('failure posting comment', async () => {
        const thunk = new TestAsyncThunk(addArticleComment, state);
        thunk.api.post.mockReturnValue(Promise.reject('Ошибка'));

        const result = await thunk.callThunk(commentText);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(errorText);
    });
});