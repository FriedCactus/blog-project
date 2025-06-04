import type {Meta, StoryObj} from '@storybook/react';
import ViewProfilePage from "./ViewProfilePage";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';

const meta: Meta<typeof ViewProfilePage> = {
    title: 'pages/ViewProfilePage',
    component: ViewProfilePage,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ViewProfilePage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};