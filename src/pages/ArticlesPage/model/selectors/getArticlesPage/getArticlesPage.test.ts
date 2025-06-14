import {getArticlesPage} from "./getArticlesPage";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesLimit", () => {
    test("Should return page value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                view: ArticleListView.SMALL,
                page: 5,
                limit: 0,
                hasMore: false,
                ids: [],
                entities: {},
                _inited: false,
                selectedCategories: []
            }
        };

        expect(getArticlesPage(state as StateSchema)).toBe(5);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesPage(state as StateSchema)).toBe(undefined);
    });
});