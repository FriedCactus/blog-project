import type {CounterSchema} from "entities/Counter";
import type {UserSchema} from 'entities/User';
import type {LoginSchema} from "features/AuthByUsername";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";

export interface StaticStateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

export interface LazyStateSchema {
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

interface ThunkWithExtra {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkWithExtra;
}

export type StateSchema = StaticStateSchema & LazyStateSchema;

export type StateSchemaKey = keyof StateSchema;