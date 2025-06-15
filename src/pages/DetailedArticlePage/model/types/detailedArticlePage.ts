import {DetailedArticleCommentsSchema} from './detailedArticleCommentsSchema';
import {DetailedArticleRecommendationsSchema} from './detailedArticleRecommendationsSchema';

export interface DetailedArticlePageSchema {
    comments: DetailedArticleCommentsSchema,
    recommendations: DetailedArticleRecommendationsSchema
}