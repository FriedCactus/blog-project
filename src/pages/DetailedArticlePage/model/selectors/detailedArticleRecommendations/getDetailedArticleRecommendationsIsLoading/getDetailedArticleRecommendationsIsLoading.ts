import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.detailedArticlePage?.recommendations.isLoading;