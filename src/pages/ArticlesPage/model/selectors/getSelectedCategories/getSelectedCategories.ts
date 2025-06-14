import {StateSchema} from "app/providers/StoreProvider";

export const getSelectedCategories = (state: StateSchema) => state.articles?.selectedCategories ?? [];