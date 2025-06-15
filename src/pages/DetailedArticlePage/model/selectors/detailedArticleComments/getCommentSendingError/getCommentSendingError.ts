import {StateSchema} from "app/providers/StoreProvider";

export const getCommentSendingError = (state: StateSchema) => state.detailedArticlePage?.comments.commentSendingError;