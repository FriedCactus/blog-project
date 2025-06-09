import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {LazyStateSchema, StateSchema} from "../config/StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {$api} from "shared/api";
import {createReducerManager} from "./reducerManager";
import {scrollRestorationReducer} from "features/ScrollRestoration";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<LazyStateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollRestoration: scrollRestorationReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
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
    });

    //@ts-expect-error reducerManager error
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];