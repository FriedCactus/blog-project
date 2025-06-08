import {articlesReducer} from "./model/slice/articlesSlice";
import {ArticlesPageAsync as ArticlesPage} from './ui/ArticlesPage.async';
import type {ArticlesSchema} from './model/types/articlesSchema';

export {
    ArticlesPage,
    articlesReducer,
    ArticlesSchema
};