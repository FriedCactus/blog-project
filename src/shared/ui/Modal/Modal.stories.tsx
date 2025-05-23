import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from "./Modal";
import {storyGlobalsDesktop, storyGlobalsMobile} from 'shared/config/storybook/globals';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
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

// Desktop
export const LightDesktop: Story = {};

export const DarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

// Mobile
export const LightMobile: Story = {
    ...storyGlobalsMobile
};

export const DarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};