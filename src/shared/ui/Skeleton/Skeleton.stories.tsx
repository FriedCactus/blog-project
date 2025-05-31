import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from "./Skeleton";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    args: {
        width: '150px',
        height: "150px"
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};

export const Circle: Story = {
    args: {
        borderRadius: '50%',
    }
};

export const CircleDark: Story = {
    args: {
        borderRadius: '50%',
    },
    decorators: ThemeDecorator(Theme.DARK)
};

export const CircleGreen: Story = {
    args: {
        borderRadius: '50%',
    },
    decorators: ThemeDecorator(Theme.GREEN)
};