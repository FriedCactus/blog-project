import {createSelector} from "@reduxjs/toolkit";
import {getScroll} from '../getScroll/getScroll';
import {StateSchema} from "app/providers/StoreProvider";

export const getScrollByPath = createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0,
);