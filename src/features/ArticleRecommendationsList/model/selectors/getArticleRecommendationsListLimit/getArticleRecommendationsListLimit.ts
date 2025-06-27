import {StateSchema} from "app/providers/StoreProvider";

export const getArticleRecommendationsListLimit = (state: StateSchema) =>
    state.detailedArticlePage?.recommendations.limit ?? 4;