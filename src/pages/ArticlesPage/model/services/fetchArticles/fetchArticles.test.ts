import {fetchArticles} from "../fetchArticles/fetchArticles";
import {TestAsyncThunk} from "shared/lib/tests";
import {articleMock} from "entities/Article";

describe("fetchArticles", () => {
    test('successful articles fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticles);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: [{...articleMock}]
        }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual([{...articleMock}]);
    });

    test('failure articles fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticles);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении статей');
    });
});