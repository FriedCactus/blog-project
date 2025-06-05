import {fetchCommentsByArticleId} from "../fetchCommentsByArticleId/fetchCommentsByArticleId";
import {TestAsyncThunk} from "shared/lib/tests";
import {articleCommentEntitiesMock} from "../../mocks/articleComment";

const commentsMock = Object.values(articleCommentEntitiesMock);

describe("fetchCommentsByArticleId", () => {
    test('successful article comments fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: commentsMock
        }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(commentsMock);
    });

    test('failure article fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении комментариев');
    });
});