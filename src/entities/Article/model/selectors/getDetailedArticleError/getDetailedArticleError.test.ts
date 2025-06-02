import {getDetailedArticleError} from "../getDetailedArticleError/getDetailedArticleError";
import {StateSchema} from "app/providers/StoreProvider";

describe("getDetailedArticleError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticle: {
                error: 'Error',
                isLoading: false
            }
        };

        expect(getDetailedArticleError(state as StateSchema)).toBe('Error');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleError(state as StateSchema)).toBe(undefined);
    });
});