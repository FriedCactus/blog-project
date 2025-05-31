import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsPage from "./ArticleDetailsPage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};