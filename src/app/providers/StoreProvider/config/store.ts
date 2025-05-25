import {combineSlices, configureStore} from "@reduxjs/toolkit";
import type {LazyStateSchema, StateSchema} from "../config/StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";

export const rootReducer = combineSlices({
    counter: counterReducer,
    user: userReducer,
}).withLazyLoadedSlices<LazyStateSchema>();

export const createReduxStore = (initialState?: StateSchema) => (
    configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    }));

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];