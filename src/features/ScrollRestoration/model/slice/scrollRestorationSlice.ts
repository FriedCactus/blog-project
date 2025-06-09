import {ScrollRestorationSchema} from "../types/scrollRestorationSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ScrollPosition {
    path: string,
    position: number
}

const initialState: ScrollRestorationSchema = {
    scroll: {}
};

export const scrollRestorationSlice = createSlice({
    name: 'scrollRestoration',
    initialState,
    reducers: {
        setScrollPosition(state, {payload}: PayloadAction<ScrollPosition>) {
            state.scroll[payload.path] = payload.position;
        }
    }
});

export const {
    reducer: scrollRestorationReducer,
    actions: scrollRestorationActions,
} = scrollRestorationSlice;