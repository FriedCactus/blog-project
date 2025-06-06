import type {Meta, StoryObj} from '@storybook/react';
import {ArticlesViewSelector} from "./ArticlesViewSelector";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {ArticleListView} from "entities/Article";

const meta: Meta<typeof ArticlesViewSelector> = {
    title: 'features/ArticlesViewSelector',
    component: ArticlesViewSelector,
    args: {
        view: ArticleListView.SMALL
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticlesViewSelector>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};