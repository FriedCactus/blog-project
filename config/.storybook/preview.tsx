import {type Preview} from '@storybook/react';
import "app/styles/index.css";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {
    ThemeDecorator,
    RouterDecorator,
    StoreDecorator,
    PageDecorator,
} from "../../src/shared/config/storybook";

// Стоит переделать на mode для синхронизации с chromatic
const CUSTOM_VIEWPORTS = {
    desktop: {
        name: 'desktop',
        styles: {
            width: '1024px',
            height: '768px',
        },
    },
};

const preview: Preview = {
    parameters: {
        viewport: {
            options: {
                ...INITIAL_VIEWPORTS,
                ...CUSTOM_VIEWPORTS
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    initialGlobals: {
        viewport: {
            value: 'desktop',
            isRotated: false
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        PageDecorator,
        StoreDecorator(),
        RouterDecorator,
    ]
};

export default preview;