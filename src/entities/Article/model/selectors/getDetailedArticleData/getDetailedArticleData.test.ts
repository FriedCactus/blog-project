import {getDetailedArticleData} from "../getDetailedArticleData/getDetailedArticleData";
import {StateSchema} from "app/providers/StoreProvider";
import {Article} from "../../types/article";

const article: Article = {
    id: "1",
    title: "Статья",
    img: "",
    views: 10,
    createdAt: "01.01.2025",
    type: [],
    blocks: []
};

describe("getDetailedArticleData", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticle: {
                article: {
                    ...article
                },
                isLoading: false
            }
        };

        expect(getDetailedArticleData(state as StateSchema)).toEqual(article);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getDetailedArticleData(state as StateSchema)).toBe(undefined);
    });
});