import {StateSchema} from "app/providers/StoreProvider";
import {getDetailedArticleRecommendationsError} from "./getDetailedArticleRecommendationsError";

describe("getDetailedArticleRecommendationsError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticlePage: {
                recommendations: {
                    error: "Ошибка получения статей",
                    isLoading: false,
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

        expect(getDetailedArticleRecommendationsError(state as StateSchema)).toEqual('Ошибка получения статей');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleRecommendationsError(state as StateSchema)).toBe(undefined);
    });
});