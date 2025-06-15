import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleRecommendationsLimit = (state: StateSchema) =>
    state.detailedArticlePage?.recommendations.limit ?? 4;