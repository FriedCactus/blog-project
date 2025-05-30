import type {Meta, StoryObj} from '@storybook/react';
import {RouterLink, RouterLinkVariant} from "./RouterLink";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, ThemeDecorator} from "shared/config/storybook";

const meta: Meta<typeof RouterLink> = {
    title: 'shared/RouterLink',
    component: RouterLink,
    args: {
        children: 'Ссылка'
    },
    ...storyGlobalsDesktop
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

// Dark
export const SecondaryDark: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const SecondaryGreen: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};
