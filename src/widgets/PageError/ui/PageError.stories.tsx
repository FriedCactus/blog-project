import type {Meta, StoryObj} from '@storybook/react';
import {PageError} from "./PageError";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop} from 'shared/config/storybook/globals';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof PageError>;

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