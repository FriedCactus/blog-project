import type {Meta, StoryObj} from '@storybook/react';
import {Icon} from "./Icon";
import {storyGlobalsDesktop} from 'shared/config/storybook';

const meta: Meta<typeof Icon> = {
    title: 'shared/Icon',
    component: Icon,
    args: {
        size: 100
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const AboutIcon: Story = {
    args: {
        name: 'about'
    }
};

export const ArticlesIcon: Story = {
    args: {
        name: 'articles'
    }
};

export const CalendarIcon: Story = {
    args: {
        name: 'calendar'
    }
};

export const CopyIcon: Story = {
    args: {
        name: 'copy'
    }
};

export const EyeIcon: Story = {
    args: {
        name: 'eye'
    }
};

export const MainIcon: Story = {
    args: {
        name: 'main'
    }
};

export const ProfileIcon: Story = {
    args: {
        name: 'profile'
    }
};

export const ThemeIcon: Story = {
    args: {
        name: 'theme'
    }
};
