import type {Meta, StoryObj} from '@storybook/react';
import {PageLoader} from "./PageLoader";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};