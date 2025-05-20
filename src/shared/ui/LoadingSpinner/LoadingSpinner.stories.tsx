import type {Meta, StoryObj} from '@storybook/react';
import {LoadingSpinner} from "./LoadingSpinner";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof LoadingSpinner> = {
    title: 'shared/LoadingSpinner',
    component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};