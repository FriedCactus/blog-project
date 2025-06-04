import {StateSchema} from "app/providers/StoreProvider";
import {getDetailedArticleCommentsIsLoading} from "./getDetailedArticleCommentsIsLoading";

describe("getDetailedArticleCommentsIsLoading", () => {
    test("Should return isLoading value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticleComments: {
                isLoading: true,
                isCommentSending: false,
                ids: [],
                entities: {}
            }
        };

        expect(getDetailedArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleCommentsIsLoading(state as StateSchema)).toBe(undefined);
    });
});