import type {Meta, StoryObj} from '@storybook/react';
import MainPage from "./MainPage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};