import {StateSchema} from "app/providers/StoreProvider";

export const getArticleRecommendationsListIsLoading = (state: StateSchema) =>
    state.detailedArticlePage?.recommendations.isLoading;