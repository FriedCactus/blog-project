import {initArticlesPage} from "./initArticlesPage";
import {TestAsyncThunk} from "shared/lib/tests";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";
import {fetchArticles} from "../fetchArticles/fetchArticles";

jest.mock('../fetchArticles/fetchArticles');

const state: DeepPartial<StateSchema> = {
    articles: {
        isLoading: false,
        view: ArticleListView.SMALL,
        page: 1,
        limit: 0,
        hasMore: true,
        ids: [],
        entities: {},
        _inited: false,
        selectedCategories: []
    }
};

describe("initArticlesPage", () => {
    test('should init successful', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, state);

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(fetchArticles).toHaveBeenCalledWith();
    });

    test('should init successful', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articles: {
                ...state.articles!,
                _inited: true
            }
        });

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(fetchArticles).not.toHaveBeenCalled();
    });

});