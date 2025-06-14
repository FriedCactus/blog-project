import {getSortOrder} from "./getSortOrder";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getSortOrder", () => {
    test("Should return sort order value", () => {
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
                selectedCategories: [],
                sortOrder: 'asc'
            }
        };

        expect(getSortOrder(state as StateSchema)).toBe('asc');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getSortOrder(state as StateSchema)).toBe('');
    });
});