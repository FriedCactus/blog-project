import {getArticlesInited} from "./getArticlesInited";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesInited", () => {
    test("Should return _inited value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                view: ArticleListView.SMALL,
                page: 0,
                limit: 0,
                hasMore: true,
                ids: [],
                entities: {},
                _inited: true,
                selectedCategories: []
            }
        };

        expect(getArticlesInited(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesInited(state as StateSchema)).toBe(undefined);
    });
});