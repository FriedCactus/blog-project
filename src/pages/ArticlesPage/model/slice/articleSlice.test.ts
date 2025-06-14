import {fetchArticles} from "../services/fetchArticles/fetchArticles";
import {ArticlesSchema} from "../types/articlesSchema";
import {articlesActions, articlesReducer} from './articlesSlice';
import {ArticleListView, articleMock} from "entities/Article";
import {LOCAL_STORAGE_ARTICLES_PAGE_VIEW} from "shared/const";
import {fetchNextArticlesPage} from "../services/fetchNextArticlesPage/fetchNextArticlesPage";

const state: ArticlesSchema = {
    isLoading: false,
    ids: [],
    entities: {},
    view: ArticleListView.SMALL,
    page: 1,
    limit: 10,
    hasMore: true,
    _inited: false,
    selectedCategories: []
};

describe('articleSlice', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('initState should update view and limit', () => {
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW, ArticleListView.BIG);
        const result = articlesReducer(state, articlesActions.initState({
            searchValue: 'search'
        }));

        expect(result).toEqual({
            ...state,
            view: ArticleListView.BIG,
            limit: 4,
            _inited: true,
            searchValue: 'search'
        });

    });

    test('setView should update view and localStorage', () => {
        const result = articlesReducer(state, articlesActions.setView(ArticleListView.BIG));

        expect(result).toEqual({
            ...state,
            view: ArticleListView.BIG,
            limit: 4
        });
        expect(localStorage.getItem(LOCAL_STORAGE_ARTICLES_PAGE_VIEW)).toEqual(ArticleListView.BIG);
    });

    test('fetchArticles should clear loading and error while pending', () => {
        const action = {
            type: fetchArticles.pending.type,
            meta: {}
        };

        expect(articlesReducer(state, action)).toEqual({
            ...state,
            isLoading: true,
            error: ''
        });
    });

    test('fetchArticles should update state when fulfilled', () => {
        const action = {
            type: fetchArticles.fulfilled.type,
            payload: [articleMock],
            meta: {}
        };

        expect(articlesReducer(state, action)).toEqual({
            ...state,
            hasMore: false,
            ids: ['1'],
            entities: {
                "1": articleMock
            },
        });
    });

    test('fetchArticles should update loading and error while rejected', () => {
        const action = {
            type: fetchArticles.rejected.type,
            payload: 'Ошибка'
        };

        expect(articlesReducer(
            {
                ...state,
                isLoading: true
            },
            action)).toEqual({
            ...state,
            isLoading: false,
            error: 'Ошибка'
        });
    });

    test('fetchNextArticlesPage should update page when fulfilled', () => {
        const action = {type: fetchNextArticlesPage.fulfilled.type};

        expect(articlesReducer(state, action)).toEqual({
            ...state,
            page: 2
        });
    });
});