import type {Meta, StoryObj} from '@storybook/react';
import {NotFoundPage} from "./NotFoundPage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

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