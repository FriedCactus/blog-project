import type {Meta, StoryObj} from '@storybook/react';
import {DetailedArticle} from "./DetailedArticle";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof DetailedArticle> = {
    title: 'entities/DetailedArticle',
    component: DetailedArticle,
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