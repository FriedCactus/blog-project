import type {Meta, StoryObj} from '@storybook/react';
import {Input} from "./Input";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: {
        autoFocus: true,
        placeholder: 'Инпут'
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};