import {StateSchema} from "app/providers/StoreProvider";
import {ArticleSortField} from "entities/Article";

export const getSortField = (state: StateSchema) => state.articles?.sortField ?? ArticleSortField.WITHOUT_SORT;