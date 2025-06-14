import type {Meta, StoryObj} from '@storybook/react';
import {ArticleCategoryTabs} from "./ArticleCategoryTabs";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleCategoryTabs> = {
    title: 'features/ArticleCategoryTabs',
    component: ArticleCategoryTabs,
    args: {
        values: ['IT']
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleCategoryTabs>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};