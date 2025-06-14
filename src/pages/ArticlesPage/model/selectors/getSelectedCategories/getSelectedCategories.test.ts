import {getSelectedCategories} from "./getSelectedCategories";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView, ArticleType} from "entities/Article";

describe("getSelectedCategories", () => {
    test("Should return selected categories", () => {
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
                selectedCategories: [ArticleType.IT],
                searchValue: ''
            }
        };

        expect(getSelectedCategories(state as StateSchema)).toEqual([ArticleType.IT]);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getSelectedCategories(state as StateSchema)).toEqual([]);
    });
});