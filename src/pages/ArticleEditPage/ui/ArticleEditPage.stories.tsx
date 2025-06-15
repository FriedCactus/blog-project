import type {Meta, StoryObj} from '@storybook/react';
import ArticleEditPage from "./ArticleEditPage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};