import type {Meta, StoryObj} from '@storybook/react';
import {RouterLink, RouterLinkVariant} from "./RouterLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof RouterLink> = {
    title: 'shared/RouterLink',
    component: RouterLink,
    args: {
        children: 'Ссылка'
    }
};

export default meta;

type Story = StoryObj<typeof RouterLink>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};