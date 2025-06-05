import {ReactRenderer} from "@storybook/react";
import {MemoryRouter, Route, Routes} from "react-router";
import {DecoratorFunction} from "@storybook/csf";

export const RouterDecorator = (
    initialEntry: string = '',
    routePath: string = ''
): DecoratorFunction<ReactRenderer, object> => {
    return function StoryComponent(Story) {
        return (
            <MemoryRouter initialEntries={[initialEntry]}>
                <Routes>
                    <Route path={routePath} element={<Story/>}/>
                </Routes>
            </MemoryRouter>
        );
    };
};