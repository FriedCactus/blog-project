import {getArticlesView} from "./getArticlesView";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesView", () => {
    test("Should return page value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                view: ArticleListView.SMALL,
                page: 0,
                limit: 0,
                hasMore: false,
                ids: [],
                entities: {}
            }
        };

        expect(getArticlesView(state as StateSchema)).toBe(ArticleListView.SMALL);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesView(state as StateSchema)).toBe(undefined);
    });
});