import type {Meta, StoryObj} from '@storybook/react';
import ArticlesPage from "./ArticlesPage";
import {Theme} from "app/providers/ThemeProvider";
import {RouterDecorator, StoreDecorator, storyGlobalsDesktop, ThemeDecorator} from 'shared/config/storybook';
import {articlesReducer} from "../model/slice/articlesSlice";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleListView, articleMock} from "entities/Article";

const articles = {
    1: articleMock,
    2: articleMock,
    3: articleMock,
    4: articleMock,
    5: articleMock,
};

const reducers = {
    articles: articlesReducer
};

const state: DeepPartial<StateSchema> = {
    articles: {
        isLoading: false,
        ids: Object.keys(articles),
        entities: articles,
        view: ArticleListView.SMALL,
        page: 0,
        limit: 0,
        hasMore: false,
        _inited: false,
        selectedCategories: []
    }
};

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    decorators: [
        RouterDecorator(),
        StoreDecorator(state, reducers)
    ],
    ...storyGlobalsDesktop
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryGreen: Story = {
    decorators: [ThemeDecorator(Theme.GREEN)]
};