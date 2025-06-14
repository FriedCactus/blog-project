import {fetchNextArticlesPage} from "./fetchNextArticlesPage";
import {TestAsyncThunk} from "shared/lib/tests";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView,} from "entities/Article";
import {fetchArticles} from "../fetchArticles/fetchArticles";

jest.mock("../fetchArticles/fetchArticles");

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

describe("fetchNextArticlesPage", () => {
    test("successful fetch next articles page", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, state);

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test("not fetch if hasMore false", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                ...state.articles!,
                hasMore: false
            }
        });

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(fetchArticles).not.toHaveBeenCalled();
    });
});