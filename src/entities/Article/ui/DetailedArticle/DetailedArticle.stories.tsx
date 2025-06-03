import type {Meta, StoryObj} from '@storybook/react';
import {DetailedArticle} from "./DetailedArticle";
import {StoreDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {articleMock} from "../../model/mocks/article";
import {detailedArticleReducer} from "../../model/slice/detailedArticleSlice";

const state = {
    detailedArticle: {
        article: articleMock,
        isLoading: false
    },
};

const asyncReducers = {
    detailedArticle: detailedArticleReducer,
};

const meta: Meta<typeof DetailedArticle> = {
    title: 'entities/DetailedArticle',
    component: DetailedArticle,
    decorators: [
        StoreDecorator(state, asyncReducers)
    ],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof DetailedArticle>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};