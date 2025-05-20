import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonVariant} from "./Button";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Кнопка',
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {};

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

export const MainDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};