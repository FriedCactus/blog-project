import {ReactRenderer} from "@storybook/react";
import {type StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DecoratorFunction} from "@storybook/csf";

export const StoreDecorator = (initialState?: DeepPartial<StateSchema>): DecoratorFunction<ReactRenderer, object> => {
    return function StoryComponent(Story) {
        return (
            <StoreProvider initialState={initialState}>
                <Story/>
            </StoreProvider>
        );
    };
};