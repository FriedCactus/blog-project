import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleListView} from "entities/Article";

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading: boolean;
    error?: string;
    view: ArticleListView;
    page: number;
    limit: number;
    hasMore: boolean;
}