import type {Meta, StoryObj} from '@storybook/react';
import {ArticleItemBig} from "./ArticleItemBig";
import {RouterDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Theme} from "app/providers/ThemeProvider";
import {articleMock} from "../../model/mocks/article";

const meta: Meta<typeof ArticleItemBig> = {
    title: 'entities/ArticleItemBig',
    component: ArticleItemBig,
    args: {
        article: articleMock
    },
    decorators: [RouterDecorator()],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleItemBig>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

export const PrimaryGreen: Story = {
    decorators: ThemeDecorator(Theme.GREEN)
};