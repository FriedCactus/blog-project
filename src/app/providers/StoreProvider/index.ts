import {StoreProvider} from "./ui/StoreProvider";
import {type AppDispatch, createReduxStore} from "./config/store";
import type {
    StateSchema,
    LazyStateSchema,
    StateSchemaKey,
    ThunkConfig,
    ReduxStoreWithManager
} from "./config/StateSchema";

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    LazyStateSchema,
    StateSchemaKey,
    AppDispatch,
    ThunkConfig,
    ReduxStoreWithManager
};