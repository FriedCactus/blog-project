import {combineReducers, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {ReducerManager, StateSchema, StateSchemaKey} from "./StateSchema";

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
    const reducers = {...initialReducers as ReducersMapObject<Required<StateSchema>>};
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: (StateSchemaKey)[] = [];

    return {
        getReducerMap: () => reducers as ReducersMapObject<StateSchema>,

        reduce: (state, action) => {
            if (keysToRemove.length > 0 && state) {
                state = {...state};
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        }
    };
};