import {detailedArticleCommentsReducer} from './detailedArticleComments/detailedArticleComments';
import {detailedArticleRecommendationsReducer} from './detailedArticleRecommendations/detailedArticleRecommendations';
import {combineReducers} from "@reduxjs/toolkit";

export const detailedArticlePageReducer = combineReducers({
    comments: detailedArticleCommentsReducer,
    recommendations: detailedArticleRecommendationsReducer,
});