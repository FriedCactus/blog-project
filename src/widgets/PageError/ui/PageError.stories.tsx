import type {Meta, StoryObj} from '@storybook/react';
import {PageError} from "./PageError";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};
