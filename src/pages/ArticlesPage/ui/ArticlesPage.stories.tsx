import type {Meta, StoryObj} from '@storybook/react';
import ArticlesPage from "./ArticlesPage";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/Articles',
    component: ArticlesPage,
    decorators: [RouterDecorator()],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};