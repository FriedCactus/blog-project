import type {Meta, StoryObj} from '@storybook/react';
import {Button, ButtonSize, ButtonVariant} from "./Button";
import {storyGlobalsDesktop} from 'shared/config/storybook/globals';

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

// Desktop
export const Main: Story = {};

export const MainSizeL: Story = {
    args: {
        size: ButtonSize.L
    }
};

export const MainSizeXL: Story = {
    args: {
        size: ButtonSize.XL
    }
};

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

export const Square: Story = {
    args: {
        square: true,
    }
};
