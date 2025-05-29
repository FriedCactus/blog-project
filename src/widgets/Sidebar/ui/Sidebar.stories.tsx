import type {Meta, StoryObj} from '@storybook/react';
import {Sidebar} from "./Sidebar";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator, StoreDecorator} from 'shared/config/storybook';

const state = {
    user: {
        authData: {
            id: '',
            username: ''
        }
    }
};

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const PrimaryWithAuth: Story = {
    decorators: [
        StoreDecorator(state)
    ],
};

export const PrimaryWithoutAuth: Story = {};

// Dark
export const PrimaryWithAuthDark: Story = {
    decorators: [
        StoreDecorator(state),
        ThemeDecorator(Theme.DARK)
    ],
};

export const PrimaryWithoutAuthDark: Story = {};