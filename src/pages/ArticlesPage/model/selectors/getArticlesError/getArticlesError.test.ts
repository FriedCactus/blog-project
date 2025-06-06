import {getArticlesError} from "../getArticlesError/getArticlesError";
import {StateSchema} from "app/providers/StoreProvider";

describe("getArticlesError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: false,
                error: 'Ошибка',
                ids: [],
                entities: {}
            }
        };

        expect(getArticlesError(state as StateSchema)).toBe('Ошибка');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesError(state as StateSchema)).toBe(undefined);
    });
});