import {StateSchema} from "app/providers/StoreProvider";

export const getSortOrder = (state: StateSchema) => state.articles?.sortOrder ?? '';