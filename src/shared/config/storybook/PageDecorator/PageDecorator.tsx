import {Decorator} from "@storybook/react";

export const PageDecorator: Decorator = (Story) => (
    <div className="app page-wrapper">
        <Story/>
    </div>
);



