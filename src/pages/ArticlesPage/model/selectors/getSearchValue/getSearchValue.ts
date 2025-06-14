import {StateSchema} from "app/providers/StoreProvider";

export const getSearchValue = (state: StateSchema) => state.articles?.searchValue ?? '';