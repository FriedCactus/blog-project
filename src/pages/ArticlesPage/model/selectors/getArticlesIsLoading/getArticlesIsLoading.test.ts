import {getArticlesIsLoading} from "../getArticlesIsLoading/getArticlesIsLoading";
import {StateSchema} from "app/providers/StoreProvider";

describe("getArticlesIsLoading", () => {
    test("Should return isLoading value", () => {
        const state: DeepPartial<StateSchema> = {
            articles: {
                isLoading: true,
                ids: [],
                entities: {}
            }
        };

        expect(getArticlesIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticlesIsLoading(state as StateSchema)).toBe(undefined);
    });
});