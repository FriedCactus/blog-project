import {getArticlesIsLoading} from "../getArticlesIsLoading/getArticlesIsLoading";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesIsLoading", () => {
    test("Should return isLoading value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: true,
                ids: [],
                entities: {},
                view: ArticleListView.SMALL,
                page: 0,
                limit: 0,
                hasMore: false,
                _inited: false,
                selectedCategories: []
            }
        };

        expect(getArticlesIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesIsLoading(state as StateSchema)).toBe(undefined);
    });
});