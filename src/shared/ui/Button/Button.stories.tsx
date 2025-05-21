import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonVariant} from "./Button";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsMobile, storyGlobalsDesktop} from 'shared/config/storybook/globals';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Кнопка',
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Button>;

// Desktop
export const MainDesktop: Story = {};

export const SecondaryDesktop: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

export const MainDarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

// Mobile
export const MainMobile: Story = {
    ...storyGlobalsMobile
};

export const SecondaryMobile: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
    ...storyGlobalsMobile
};

export const MainDarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};

export const SecondaryDarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        variant: ButtonVariant.SECONDARY,
    },
    ...storyGlobalsMobile
};
