import type {CounterSchema} from "entities/Counter";
import type {UserSchema} from 'entities/User';
import type {LoginSchema} from "features/AuthByUsername";

interface StaticStateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

export interface LazyStateSchema {
    loginForm?: LoginSchema;
}

export type StateSchema = StaticStateSchema & LazyStateSchema;

export type StateSchemaKey = keyof StateSchema;