import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from "./CommentList";
import {storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {commentListMock} from "../../model/mocks/comment";

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment',
    component: CommentList,
    args: {
        comments: commentListMock
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof CommentList>;

// Light
export const Primary: Story = {};
export const PrimaryLoading: Story = {
    args: {
        isLoading: true,
    }
};

// Dark
export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};
export const PrimaryLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: ThemeDecorator(Theme.DARK)
};

// Green
export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};
export const PrimaryLoadingGreen: Story = {
    args: {
        isLoading: true,
    },
    decorators: ThemeDecorator(Theme.GREEN)
};