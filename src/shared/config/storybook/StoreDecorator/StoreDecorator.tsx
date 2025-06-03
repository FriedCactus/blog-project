import {ReactRenderer} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DecoratorFunction} from "@storybook/csf";
import {ReducersList} from "shared/lib/components";

export const StoreDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
): DecoratorFunction<ReactRenderer, object> => {
    return function StoryComponent(Story) {
        return (
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <Story/>
            </StoreProvider>
        );
    };
};