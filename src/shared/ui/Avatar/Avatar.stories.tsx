import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from "./Avatar";
import {storyGlobalsDesktop} from 'shared/config/storybook';
import avatar from 'shared/assets/test/avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: avatar,
        alt: 'Картинка',
        size: 150
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};