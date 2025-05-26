import type {CounterSchema} from "entities/Counter";
import type {UserSchema} from 'entities/User';
import type {LoginSchema} from "features/AuthByUsername";
import {ProfileSchema} from "entities/Profile";

interface StaticStateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

export interface LazyStateSchema {
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchema = StaticStateSchema & LazyStateSchema;

export type StateSchemaKey = keyof StateSchema;