import {getArticlesError} from "../getArticlesError/getArticlesError";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView} from "entities/Article";

describe("getArticlesError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                error: 'Ошибка',
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

        expect(getArticlesError(state as StateSchema)).toBe('Ошибка');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesError(state as StateSchema)).toBe(undefined);
    });
});