import {ArticleComment} from "../types/articleComment";
import {EntityState} from "@reduxjs/toolkit";

export interface DetailedArticleCommentsSchema extends EntityState<ArticleComment, string> {
    isLoading: boolean;
    error?: string;
}