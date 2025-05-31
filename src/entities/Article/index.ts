import type {DetailedArticleSchema} from "./model/types/detailedArticleSchema";
import {DetailedArticle} from "./ui/DetailedArticle/DetailedArticle";
import {detailedArticleReducer} from './model/slice/detailedArticleSlice';

export {
    DetailedArticleSchema,
    DetailedArticle,
    detailedArticleReducer
};
