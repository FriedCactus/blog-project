import {getDetailedArticleData} from "../getDetailedArticleData/getDetailedArticleData";
import {StateSchema} from "app/providers/StoreProvider";
import {articleMock} from "../../mocks/article";

describe("getDetailedArticleData", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticle: {
                article: {
                    ...articleMock
                },
                isLoading: false
            }
        };

        expect(getDetailedArticleData(state as StateSchema)).toEqual(articleMock);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleData(state as StateSchema)).toBe(undefined);
    });
});