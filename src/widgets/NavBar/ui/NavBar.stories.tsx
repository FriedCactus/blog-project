import type {Meta, StoryObj} from '@storybook/react';
import {NavBar} from "./NavBar";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof NavBar> = {
    title: 'widgets/NavBar',
    component: NavBar,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};
