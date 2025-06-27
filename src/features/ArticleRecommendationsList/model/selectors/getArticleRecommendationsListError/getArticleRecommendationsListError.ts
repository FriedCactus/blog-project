import {StateSchema} from "app/providers/StoreProvider";

export const getArticleRecommendationsListError = (state: StateSchema) => state.detailedArticlePage?.recommendations.error;