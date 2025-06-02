import type {Meta, StoryObj} from '@storybook/react';
import {DetailedArticle} from "./DetailedArticle";
import {StoreDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import type {StateSchema} from "app/providers/StoreProvider";
import {articleMock} from "entities/Article/model/mocks/article";

const initialState: DeepPartial<StateSchema> = {
    detailedArticle: {
        article: articleMock,
        isLoading: false
    }
};

const meta: Meta<typeof DetailedArticle> = {
    title: 'entities/DetailedArticle',
    component: DetailedArticle,
    decorators: [
        StoreDecorator(initialState)
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