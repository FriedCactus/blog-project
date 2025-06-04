import type {DetailedArticleSchema} from "./model/types/detailedArticleSchema";
import {DetailedArticle} from "./ui/DetailedArticle/DetailedArticle";
import {detailedArticleReducer} from './model/slice/detailedArticleSlice';
import {articleMock} from './model/mocks/article';
import {getDetailedArticleData} from "./model/selectors/getDetailedArticleData/getDetailedArticleData";

export {
    DetailedArticleSchema,
    DetailedArticle,
    detailedArticleReducer,
    articleMock,
    getDetailedArticleData
};
