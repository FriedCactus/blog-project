import type {Meta, StoryObj} from '@storybook/react';
import {NavBar} from "./NavBar";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};