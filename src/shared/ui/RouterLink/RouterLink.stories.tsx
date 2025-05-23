import type {Meta, StoryObj} from '@storybook/react';
import {RouterLink, RouterLinkVariant} from "./RouterLink";
import {Theme} from "app/providers/ThemeProvider";
import {storyGlobalsDesktop, storyGlobalsMobile, ThemeDecorator} from "shared/config/storybook";

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

// Desktop
export const PrimaryDesktop: Story = {};

export const SecondaryDesktop: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    }
};

export const PrimaryDarkDesktop: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDarkDesktop: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Mobile
export const PrimaryMobile: Story = {
    ...storyGlobalsMobile
};

export const SecondaryMobile: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    ...storyGlobalsMobile
};

export const PrimaryDarkMobile: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};

export const SecondaryDarkMobile: Story = {
    args: {
        variant: RouterLinkVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)],
    ...storyGlobalsMobile
};