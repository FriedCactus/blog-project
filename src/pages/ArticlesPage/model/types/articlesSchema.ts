import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticleListView, ArticleSortField, ArticleType} from "entities/Article";
import {SortOrder} from "shared/types";

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading: boolean;
    error?: string;
    view: ArticleListView;
    page: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;
    // Sort, filter, search
    sortField?: ArticleSortField;
    sortOrder?: SortOrder;
    searchValue?: string;
    selectedCategories: ArticleType[];
}