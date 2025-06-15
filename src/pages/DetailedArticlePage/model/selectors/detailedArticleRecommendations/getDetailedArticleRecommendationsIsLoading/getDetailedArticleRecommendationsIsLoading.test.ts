import {StateSchema} from "app/providers/StoreProvider";
import {getDetailedArticleRecommendationsIsLoading} from "./getDetailedArticleRecommendationsIsLoading";

describe("getDetailedArticleRecommendationsIsLoading", () => {
    test("Should return isLoading value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticlePage: {
                recommendations: {
                    isLoading: true,
                    limit: 0,
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

        expect(getDetailedArticleRecommendationsIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleRecommendationsIsLoading(state as StateSchema)).toBe(undefined);
    });
});