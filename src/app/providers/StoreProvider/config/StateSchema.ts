import type {CounterSchema} from "entities/Counter";
import type {UserSchema} from 'entities/User';
import {DetailedArticleSchema} from 'entities/Article';
import type {LoginSchema} from "features/AuthByUsername";
import {ProfileSchema} from "features/EditableProfileCard";
import {AxiosInstance} from "axios";

export interface StaticStateSchema {
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