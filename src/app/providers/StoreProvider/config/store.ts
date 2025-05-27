import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {LazyStateSchema, StateSchema} from "../config/StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {$api} from "shared/api";

export const rootReducer = combineSlices({
    counter: counterReducer,
    user: userReducer,
}).withLazyLoadedSlices<LazyStateSchema>();

export const createReduxStore = (initialState?: StateSchema) => (
    configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api
                    },
                },
            }),
    }));

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];