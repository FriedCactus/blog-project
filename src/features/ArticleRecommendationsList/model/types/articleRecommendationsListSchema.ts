import {EntityState} from "@reduxjs/toolkit";
import {Article} from "entities/Article";

export interface ArticleRecommendationsListSchema extends EntityState<Article, string> {
    isLoading: boolean;
    error?: string;
    limit: number;
}