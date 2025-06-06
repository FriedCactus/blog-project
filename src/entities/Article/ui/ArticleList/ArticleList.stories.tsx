import type {Meta, StoryObj} from '@storybook/react';
import {ArticleList} from "./ArticleList";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {Article} from "entities/Article/model/types/article";
import {articleMock} from "entities/Article";

const articles: Article[] = Array(9).fill(articleMock).map((article, index) => ({
    ...article,
    id: String(index),
}));

const meta: Meta<typeof ArticleList> = {
    title: 'entities/ArticleList',
    component: ArticleList,
    decorators: [RouterDecorator()],
    args: {
        articles
    },
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

// Light
export const PrimarySmall: Story = {};

export const PrimaryBig: Story = {
    args: {
        view: 'big'
    }
};

export const PrimarySmallSkeleton: Story = {
    args: {
        view: 'small',
        isLoading: true
    }
};

export const PrimaryBigSkeleton: Story = {
    args: {
        view: 'big',
        isLoading: true
    }
};

export const PrimaryError: Story = {
    args: {
        isError: true
    }
};

// Dark
export const PrimarySmallDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryBigDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        view: 'big'
    }
};

export const PrimarySmallSkeletonDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        view: 'small',
        isLoading: true
    }
};

export const PrimaryBigSkeletonDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        view: 'big',
        isLoading: true
    }
};

export const PrimaryErrorDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isError: true
    }
};

// Green
export const PrimarySmallGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};

export const PrimaryBigGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
    args: {
        view: 'big'
    }
};

export const PrimarySmallSkeletonGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
    args: {
        view: 'small',
        isLoading: true
    }
};

export const PrimaryBigSkeletonGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
    args: {
        view: 'big',
        isLoading: true
    }
};

export const PrimaryErrorGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)],
    args: {
        isError: true
    }
};