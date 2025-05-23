import type {Meta, StoryObj} from '@storybook/react';
import {Sidebar} from "./Sidebar";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

// Desktop
export const LightDesktop: Story = {};

export const DarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Mobile
export const LightMobile: Story = {
    ...storyGlobalsMobile
};

export const DarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};