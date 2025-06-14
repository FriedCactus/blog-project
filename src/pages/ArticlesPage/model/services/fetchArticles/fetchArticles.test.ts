import {fetchArticles} from "../fetchArticles/fetchArticles";
import {TestAsyncThunk} from "shared/lib/tests";
import {ArticleListView, articleMock} from "entities/Article";
import {StateSchema} from "app/providers/StoreProvider";
import {addQueryParams} from "shared/lib/url";
import {ArticleSortParam} from "features/ArticlesSortSelector";

jest.mock('shared/lib/url');

const state: DeepPartial<StateSchema> = {
    articles: {
        isLoading: false,
        view: ArticleListView.BIG,
        page: 1,
        limit: 4,
        hasMore: false,
        ids: [],
        entities: {},
        _inited: false,
        selectedCategories: [],
        searchValue: 'search'
    }
};

const queryParams = {
    [ArticleSortParam.FIELD]: '',
    [ArticleSortParam.ORDER]: '',
    [ArticleSortParam.SEARCH]: 'search',
    [ArticleSortParam.TYPE]: [],
};

describe("fetchArticles", () => {
    test('successful articles fetch', async () => {
        const thunk = new TestAsyncThunk(fetchArticles, state);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: [{...articleMock}]
        }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(addQueryParams).toHaveBeenCalledWith(queryParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual([{...articleMock}]);
    });

    test('successful articles when page undefined', async () => {
        const thunk = new TestAsyncThunk(fetchArticles, state);
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
        const thunk = new TestAsyncThunk(fetchArticles, state);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении статей');
    });
});