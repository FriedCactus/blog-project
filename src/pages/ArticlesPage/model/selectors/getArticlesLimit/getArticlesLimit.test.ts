import {getArticlesLimit} from "./getArticlesLimit";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesLimit", () => {
    test("Should return limit value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                view: ArticleListView.SMALL,
                page: 0,
                limit: 10,
                hasMore: true,
                ids: [],
                entities: {},
                _inited: false,
                selectedCategories: []
            }
        };

        expect(getArticlesLimit(state as StateSchema)).toBe(10);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesLimit(state as StateSchema)).toBe(undefined);
    });
});