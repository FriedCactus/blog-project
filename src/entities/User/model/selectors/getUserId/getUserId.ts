import type {StateSchema} from "app/providers/StoreProvider";

export const getUserId = (state: StateSchema) => state.user.authData?.id;