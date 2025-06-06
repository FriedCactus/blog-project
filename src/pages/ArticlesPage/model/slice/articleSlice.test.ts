import {fetchArticles} from "../services/fetchArticles/fetchArticles";
import {articlesReducer} from '../slice/articlesSlice';
import {ArticlesSchema} from "pages/ArticlesPage";
import {articleMock} from "entities/Article";

const state: ArticlesSchema = {
    isLoading: false,
    ids: [],
    entities: {}
};

describe('articleSlice', () => {
    test('fetchArticles should clear loading and error while pending', () => {
        const action = {type: fetchArticles.pending.type};

        expect(articlesReducer(state, action)).toEqual({
            ...state,
            isLoading: true,
            error: ''
        });
    });

    test('fetchArticles should update state when fulfilled', () => {
        const action = {
            type: fetchArticles.fulfilled.type,
            payload: [articleMock]
        };

        expect(articlesReducer(state, action)).toEqual({
            ...state,
            ids: ['1'],
            entities: {
                "1": articleMock
            }
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
});