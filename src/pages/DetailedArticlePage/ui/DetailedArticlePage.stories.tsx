import type {Meta, StoryObj} from '@storybook/react';
import DetailedArticlePage from "./DetailedArticlePage";
import {Theme} from "app/providers/ThemeProvider";
import {StoreDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {articleMock, detailedArticleReducer} from "entities/Article";
import {detailedArticleCommentsReducer} from "../model/slice/detailedArticleComments";
import {StateSchema} from "app/providers/StoreProvider";
import {articleCommentEntitiesMock} from "../model/mocks/articleComment";

const state: DeepPartial<StateSchema> = {
    detailedArticle: {
        article: articleMock,
        isLoading: false
    },
    detailedArticleComments: {
        isLoading: false,
        isCommentSending: false,
        ids: Object.keys(articleCommentEntitiesMock),
        entities: articleCommentEntitiesMock
    }
};

const asyncReducers = {
    detailedArticle: detailedArticleReducer,
    detailedArticleComments: detailedArticleCommentsReducer
};

const meta: Meta<typeof DetailedArticlePage> = {
    title: 'pages/ArticleDetailsPage',
    component: DetailedArticlePage,
    decorators: [
        StoreDecorator(state, asyncReducers)
    ],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof DetailedArticlePage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};