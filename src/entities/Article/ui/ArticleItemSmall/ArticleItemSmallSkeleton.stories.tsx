import type {Meta, StoryObj} from '@storybook/react';
import {ArticleItemSmallSkeleton} from "./ArticleItemSmallSkeleton";
import {RouterDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleItemSmallSkeleton> = {
    title: 'entities/ArticleItemSmallSkeleton',
    component: ArticleItemSmallSkeleton,
    decorators: [RouterDecorator()],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleItemSmallSkeleton>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};