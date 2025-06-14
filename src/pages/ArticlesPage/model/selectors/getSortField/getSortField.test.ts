import {getSortField} from "./getSortField";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView, ArticleSortField} from "entities/Article";

describe("getSortField", () => {
    test("Should return sort field value", () => {
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
                sortField: ArticleSortField.VIEWS
            }
        };

        expect(getSortField(state as StateSchema)).toBe(ArticleSortField.VIEWS);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getSortField(state as StateSchema)).toBe(ArticleSortField.WITHOUT_SORT);
    });
});