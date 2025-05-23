import type {Meta, StoryObj} from '@storybook/react';
import {PageLoader} from "./PageLoader";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

// Desktop
export const LightDesktop: Story = {};

export const DarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

// Mobile
export const LightMobile: Story = {
    ...storyGlobalsMobile
};

export const DarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};