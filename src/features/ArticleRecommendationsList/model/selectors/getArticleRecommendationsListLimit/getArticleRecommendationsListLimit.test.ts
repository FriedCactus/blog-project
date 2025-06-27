import {StateSchema} from "app/providers/StoreProvider";
import {getArticleRecommendationsListLimit} from "./getArticleRecommendationsListLimit";

describe("getArticleRecommendationsListLimit", () => {
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

        expect(getArticleRecommendationsListLimit(state as StateSchema)).toBe(2);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleRecommendationsListLimit(state as StateSchema)).toBe(4);
    });
});