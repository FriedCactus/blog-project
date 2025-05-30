import type {Meta, StoryObj} from '@storybook/react';
import {LoadingSpinner} from "./LoadingSpinner";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, storyGlobalsMobile, ThemeDecorator} from "shared/config/storybook";

const meta: Meta<typeof LoadingSpinner> = {
    title: 'shared/LoadingSpinner',
    component: LoadingSpinner,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
    ...storyGlobalsMobile
};