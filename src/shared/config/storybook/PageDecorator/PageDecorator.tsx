import {Decorator} from "@storybook/react";
import {Page} from "shared/ui/Page";

export const PageDecorator: Decorator = (Story) => (
    <div className="app">
        <Page>
            <Story/>
        </Page>
    </div>
);



