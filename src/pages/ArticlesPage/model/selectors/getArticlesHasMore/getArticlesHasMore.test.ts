import {getArticlesHasMore} from "./getArticlesHasMore";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesHasMore", () => {
    test("Should return hasMore value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                view: ArticleListView.SMALL,
                page: 0,
                limit: 0,
                hasMore: true,
                ids: [],
                entities: {}
            }
        };

        expect(getArticlesHasMore(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesHasMore(state as StateSchema)).toBe(undefined);
    });
});