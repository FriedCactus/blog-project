import type {CounterSchema} from "entities/Counter";
import type {UserSchema} from 'entities/User';
import {DetailedArticleSchema} from 'entities/Article';
import type {LoginSchema} from "features/AuthByUsername";
import {ProfileSchema} from "features/EditableProfileCard";
import {AxiosInstance} from "axios";
import {Action, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";

interface StaticStateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

export interface LazyStateSchema {
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    detailedArticle?: DetailedArticleSchema;
}

interface ThunkWithExtra {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkWithExtra;
    state: StateSchema;
}

export type StateSchema = StaticStateSchema & LazyStateSchema;

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema | undefined, action: Action) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}