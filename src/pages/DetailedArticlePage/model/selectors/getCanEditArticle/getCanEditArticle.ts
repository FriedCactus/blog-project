import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {getDetailedArticleData} from "entities/Article";

export const getCanEditArticle = createSelector(
    getUserAuthData,
    getDetailedArticleData,
    (user, article) => {
        if (!user?.id || !article?.user.id) return false;

        return user.id === article.user.id;
    }
);