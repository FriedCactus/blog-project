import {StateSchema} from "app/providers/StoreProvider";
import {getDetailedArticleRecommendationsLimit} from "./getDetailedArticleRecommendationsLimit";

describe("getDetailedArticleRecommendationsIsLoading", () => {
    test("Should return limit value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticlePage: {
                recommendations: {
                    isLoading: false,
                    limit: 2,
                    ids: [],
                    entities: {}
                },
                comments: {
                    isLoading: false,
                    isCommentSending: false,
                    ids: [],
                    entities: {}
                }
            }
        };

        expect(getDetailedArticleRecommendationsLimit(state as StateSchema)).toBe(2);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleRecommendationsLimit(state as StateSchema)).toBe(4);
    });
});