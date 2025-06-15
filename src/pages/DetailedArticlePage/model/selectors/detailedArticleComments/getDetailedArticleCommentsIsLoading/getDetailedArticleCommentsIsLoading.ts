import {StateSchema} from "app/providers/StoreProvider";

export const getDetailedArticleCommentsIsLoading = (state: StateSchema) => (
    state.detailedArticlePage?.comments.isLoading
);