import type {DetailedArticleSchema} from "./model/types/detailedArticleSchema";
import {DetailedArticle} from "./ui/DetailedArticle/DetailedArticle";
import {detailedArticleReducer} from './model/slice/detailedArticleSlice';
import {articleMock} from './model/mocks/article';

export {
    DetailedArticleSchema,
    DetailedArticle,
    detailedArticleReducer,
    articleMock
};
