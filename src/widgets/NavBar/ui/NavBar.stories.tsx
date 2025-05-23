import type {Meta, StoryObj} from '@storybook/react';
import {NavBar} from "./NavBar";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof NavBar>;

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