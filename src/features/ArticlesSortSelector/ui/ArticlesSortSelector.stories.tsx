import type {Meta, StoryObj} from '@storybook/react';
import {ArticlesSortSelector} from "./ArticlesSortSelector";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {ArticleSortField} from "entities/Article";

const meta: Meta<typeof ArticlesSortSelector> = {
    title: 'features/ArticlesSortSelector',
    component: ArticlesSortSelector,
    args: {
        sortOrder: '',
        sortField: ArticleSortField.WITHOUT_SORT
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticlesSortSelector>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};