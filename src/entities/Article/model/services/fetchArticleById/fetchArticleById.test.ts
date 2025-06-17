import {fetchArticleById} from "./fetchArticleById";
import {TestAsyncThunk} from "shared/lib/tests";
import {articleMock} from "../../mocks/article";

describe("fetchArticleById", () => {
    test('successful article fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: articleMock
        }));

        const result = await thunk.callThunk(1);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleMock);
    });

    test('failure article fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(1);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении статьи');
    });
});