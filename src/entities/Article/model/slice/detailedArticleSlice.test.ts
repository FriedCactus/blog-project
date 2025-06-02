import {articleMock} from "../mocks/article";
import {detailedArticleReducer, detailedArticleActions} from './detailedArticleSlice';
import {DetailedArticleSchema} from "entities/Article";
import {fetchArticleById} from "../services/fetchArticleById/fetchArticleById";

const state: DetailedArticleSchema = {
    article: articleMock,
    isLoading: false,
};

describe("detailedArticleSlice", () => {
    test("should clear article", () => {
        expect(detailedArticleReducer(state, detailedArticleActions.clearArticle())).toEqual({
            ...state,
            article: undefined
        });
    });

    test('fetchArticleById should clear loading and errors while pending', () => {
        const action = {type: fetchArticleById.pending.type};

        expect(detailedArticleReducer(state, action)).toEqual(({
            ...state,
            error: '',
            isLoading: true
        }));
    });

    test('fetchArticleById should update state when fulfilled', () => {
        const action = {
            type: fetchArticleById.fulfilled.type,
            payload: articleMock
        };

        expect(detailedArticleReducer(state, action)).toEqual(({
            ...state,
            article: {
                ...articleMock
            }
        }));
    });

    test('fetchArticleById should update error when rejected', () => {
        const action = {
            type: fetchArticleById.rejected.type,
            payload: 'Ошибка'
        };

        expect(detailedArticleReducer(state, action)).toEqual(({
            ...state,
            error: 'Ошибка',
        }));
    });
});