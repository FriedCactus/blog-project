import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from "./AboutPage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};