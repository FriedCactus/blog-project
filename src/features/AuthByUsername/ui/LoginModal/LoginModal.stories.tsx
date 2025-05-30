import type {Meta, StoryObj} from '@storybook/react';
import {LoginModal} from "./LoginModal";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    args: {
        isOpen: true
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};