import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleError = (state: StateSchema) => state.detailedArticle?.error;