import type {CounterSchema} from "./model/types/counterSchema";
import {counterReducer, counterActions} from './model/slice/counterSlice';
import {Counter} from "./ui/Counter";

export {
    CounterSchema,
    counterReducer,
    counterActions,
    Counter
};