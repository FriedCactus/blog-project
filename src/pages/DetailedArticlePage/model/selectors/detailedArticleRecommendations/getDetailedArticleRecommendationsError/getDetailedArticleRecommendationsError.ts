import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleRecommendationsError = (state: StateSchema) => state.detailedArticlePage?.recommendations.error;