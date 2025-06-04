import {type Preview} from '@storybook/react';
import "app/styles/index.css";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {
    ThemeDecorator,
    RouterDecorator,
    StoreDecorator,
    PageDecorator,
    TranslationDecorator
} from "../../src/shared/config/storybook";
import {loginReducer} from "../../src/features/AuthByUsername";
import {profileReducer} from "../../src/features/EditableProfileCard";
import {LazyStateSchema} from "../../src/app/providers/StoreProvider";
import {detailedArticleCommentsReducer} from "../../src/pages/DetailedArticlePage/model/slice/detailedArticleComments";
import {detailedArticleReducer} from "../../src/entities/Article";

const reducers: LazyStateSchema = {
    loginForm: loginReducer,
    profile: profileReducer,
    detailedArticle: detailedArticleReducer,
    detailedArticleComments: detailedArticleCommentsReducer
};

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
        TranslationDecorator,
        StoreDecorator(undefined, reducers),
        RouterDecorator,
    ]
};

export default preview;