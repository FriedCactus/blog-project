import {type Preview} from '@storybook/react';
import "app/styles/index.css";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator
    ]
};

export default preview;