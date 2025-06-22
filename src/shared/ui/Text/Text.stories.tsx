import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextVariant, TextAlign} from "./Text";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    args: {
        children: 'Текст',
        title: 'Заголовок'
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Text>;

// Light
export const Primary: Story = {};

export const Secondary: Story = {
    args: {
        variant: TextVariant.SECONDARY
    }
};

export const Error: Story = {
    args: {
        variant: TextVariant.ERROR
    }
};

export const OnlyTitle: Story = {
    args: {
        children: ''
    }
};

export const OnlyText: Story = {
    args: {
        title: ''
    }
};

export const LeftAlign: Story = {
    args: {
        textAlign: TextAlign.LEFT
    }
};

export const RightAlign: Story = {
    args: {
        textAlign: TextAlign.RIGHT
    }
};

export const CenterAlign: Story = {
    args: {
        textAlign: TextAlign.CENTER
    }
};

// Dark
export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        variant: TextVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const SecondaryGreen: Story = {
    args: {
        variant: TextVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

// Sizes
export const SizeS: Story = {
    args: {
        size: 's'
    }
};

export const SizeM: Story = {
    args: {
        size: 'm'
    }
};

export const SizeL: Story = {
    args: {
        size: 'l'
    }
};

