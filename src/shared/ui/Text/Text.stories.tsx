import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextVariant, TextAlign} from "./Text";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок'
    }
};

export const Secondary: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.SECONDARY
    }
};

export const Error: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.ERROR
    }
};

export const OnlyTitle: Story = {
    args: {
        title: 'Заголовок'
    }
};

export const OnlyText: Story = {
    args: {
        children: 'Текст'
    }
};

export const LeftAlign: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        textAlign: TextAlign.LEFT
    }
};

export const RightAlign: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        textAlign: TextAlign.RIGHT
    }
};

export const CenterAlign: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        textAlign: TextAlign.CENTER
    }
};

// Dark
export const PrimaryDark: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorDark: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.ERROR
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Заголовок'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const OnlyTextDark: Story = {
    args: {
        children: 'Текст'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

// Green
export const PrimaryGreen: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок'
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const SecondaryGreen: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const ErrorGreen: Story = {
    args: {
        children: 'Текст',
        title: 'Заголовок',
        variant: TextVariant.ERROR
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const OnlyTitleGreen: Story = {
    args: {
        title: 'Заголовок'
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const OnlyTextGreen: Story = {
    args: {
        children: 'Текст'
    },
    decorators: [ThemeDecorator(Theme.GREEN)]
};
