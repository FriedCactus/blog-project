import {Decorator} from "@storybook/react";
import {type StateSchema, StoreProvider} from "app/providers/StoreProvider";
import type {DeepPartial} from "shared/types";

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>): Decorator => {
    return function StoryComponent(Story) {
        return (
            <StoreProvider initialState={initialState}>
                <Story/>
            </StoreProvider>
        );
    };
};