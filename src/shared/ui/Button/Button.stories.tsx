import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonSize, ButtonVariant} from "./Button";
import {storyGlobalsDesktop} from 'shared/config/storybook';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Кнопка',
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {};

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

export const Clear: Story = {
    args: {
        variant: ButtonVariant.CLEAR,
    },
};

export const WithoutPaddings: Story = {
    args: {
        withPaddings: false
    }
};

export const SizeL: Story = {
    args: {
        size: ButtonSize.L
    }
};

export const SizeXL: Story = {
    args: {
        size: ButtonSize.XL
    }
};

export const Square: Story = {
    args: {
        square: true,
        children: '+'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};
