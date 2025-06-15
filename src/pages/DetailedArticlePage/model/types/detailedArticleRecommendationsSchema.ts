import {EntityState} from "@reduxjs/toolkit";
import {Article} from "entities/Article";

export interface DetailedArticleRecommendationsSchema extends EntityState<Article, string> {
    isLoading: boolean;
    error?: string;
    limit: number;
}