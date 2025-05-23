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

// Desktop
export const LightDesktop: Story = {};

export const DarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};

// Mobile
export const LightMobile: Story = {};

export const DarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};