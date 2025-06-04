import type {Meta, StoryObj} from '@storybook/react';
import AddCommentForm from "./AddCommentForm";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    args: {
        onSubmit: () => {
        }
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};