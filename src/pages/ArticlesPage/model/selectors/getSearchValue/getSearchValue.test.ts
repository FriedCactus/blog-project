import {getSearchValue} from "./getSearchValue";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getSearchValue", () => {
    test("Should return search value", () => {
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
                searchValue: 'search'
            }
        };

        expect(getSearchValue(state as StateSchema)).toBe('search');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getSearchValue(state as StateSchema)).toBe('');
    });
});