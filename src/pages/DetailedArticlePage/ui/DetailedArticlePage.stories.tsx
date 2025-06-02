import type {Meta, StoryObj} from '@storybook/react';
import DetailedArticlePage from "./DetailedArticlePage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof DetailedArticlePage> = {
    title: 'pages/ArticleDetailsPage',
    component: DetailedArticlePage,
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