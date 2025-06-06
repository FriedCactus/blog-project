import type {DetailedArticleSchema} from "./model/types/detailedArticleSchema";
import {DetailedArticle} from "./ui/DetailedArticle/DetailedArticle";
import {detailedArticleReducer} from './model/slice/detailedArticleSlice';
import {articleMock} from './model/mocks/article';
import {getDetailedArticleData} from "./model/selectors/getDetailedArticleData/getDetailedArticleData";
import {ArticleList} from "./ui/ArticleList/ArticleList";

export {
    DetailedArticleSchema,
    DetailedArticle,
    detailedArticleReducer,
    articleMock,
    getDetailedArticleData,
    ArticleList
};
