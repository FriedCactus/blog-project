import {getDetailedArticleIsLoading} from "../getDetailedArticleIsLoading/getDetailedArticleIsLoading";
import {StateSchema} from "app/providers/StoreProvider";

describe("getDetailedArticleIsLoading", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticle: {
                isLoading: true
            }
        };

        expect(getDetailedArticleIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleIsLoading(state as StateSchema)).toBe(undefined);
    });
});