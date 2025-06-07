import type {Meta, StoryObj} from '@storybook/react';
import {Page} from "./Page";
import {ThemeDecorator, storyGlobalsDesktop} from "shared/config/storybook";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    args: {
        children: <div>Страница</div>
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
};