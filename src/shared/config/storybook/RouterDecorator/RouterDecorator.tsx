import {Decorator} from "@storybook/react";
import {BrowserRouter} from "react-router";

export const RouterDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);