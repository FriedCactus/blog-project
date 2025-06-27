import type {Meta, StoryObj} from '@storybook/react';
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'shared/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

// Light
export const Primary: Story = {};

// Dark
export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};