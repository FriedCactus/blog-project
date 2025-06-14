import type {Meta, StoryObj} from '@storybook/react';
import {TabIem, Tabs} from "./Tabs";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const values = ['1'];

const tabs: TabIem[] = [
    {
        value: '1',
        content: 'Первый таб'
    },
    {
        value: '2',
        content: 'Второй таб'
    }
];

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    args: {
        values,
        tabs
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};