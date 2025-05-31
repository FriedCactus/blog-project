import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleData = (state: StateSchema) => state.detailedArticle?.article;