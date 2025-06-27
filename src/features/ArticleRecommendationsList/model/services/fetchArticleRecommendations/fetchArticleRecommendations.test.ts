import {fetchArticleRecommendations} from "./fetchArticleRecommendations";
import {TestAsyncThunk} from "shared/lib/tests";
import {articleMock} from "entities/Article/model/mocks/article";
import {StateSchema} from "app/providers/StoreProvider";

const state: DeepPartial<StateSchema> = {
    detailedArticlePage: {
        recommendations: {
            limit: 4,
            isLoading: false,
            ids: [],
            entities: {}
        },
        comments: {
            isLoading: false,
            isCommentSending: false,
            ids: [],
            entities: {}
        }
    }
};

describe("fetchArticleRecommendations", () => {
    test('successful article recommendations fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendations, state);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: [articleMock]
        }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual([articleMock]);
    });

    test('failure article recommendations fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticleRecommendations, state);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении рекомендуемых статей');
    });
});