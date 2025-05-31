import {Article} from "./article";

export interface DetailedArticleSchema {
    isLoading: boolean;
    error?: string;
    article?: Article;
}