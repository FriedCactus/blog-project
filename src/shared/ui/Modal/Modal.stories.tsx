import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from "./Modal";
import {ThemeDecorator, storyGlobalsDesktop} from "shared/config/storybook";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Architecto cupiditate fuga mollitia perspiciatis quibusdam. 
        Ad asperiores beatae consequatur ipsa rerum?`,
        isOpen: true,
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const PrimaryLight: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};