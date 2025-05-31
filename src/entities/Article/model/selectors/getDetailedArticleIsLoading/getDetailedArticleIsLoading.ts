import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleIsLoading = (state: StateSchema) => state.detailedArticle?.isLoading;