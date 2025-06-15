import {
    fetchArticleRecommendations
} from "../../services/detailedArticleRecommendations/fetchArticleRecommendations/fetchArticleRecommendations";
import {
    DetailedArticleRecommendationsSchema
} from "../../types/detailedArticleRecommendationsSchema";
import {detailedArticleRecommendationsReducer} from './detailedArticleRecommendations';
import {articleMock} from "entities/Article";

const state: DetailedArticleRecommendationsSchema = {
    isLoading: false,
    limit: 0,
    ids: [],
    entities: {}
};

describe('detailedArticleRecommendations', () => {
    test('fetchArticleRecommendations should clear error and isLoading while pending', () => {
        const action = {type: fetchArticleRecommendations.pending.type};

        expect(detailedArticleRecommendationsReducer(state, action)).toEqual({
            ...state,
            isLoading: true,
            error: ''
        });
    });

    test('fetchArticleRecommendations should update state when fulfilled', () => {
        const action = {
            type: fetchArticleRecommendations.fulfilled.type,
            payload: [articleMock]
        };

        expect(detailedArticleRecommendationsReducer(state, action)).toEqual({
            ...state,
            entities: {
                '1': articleMock
            },
            ids: ['1']
        });
    });

    test('fetchArticleRecommendations should update error and isLoading when rejected', () => {
        const action = {
            type: fetchArticleRecommendations.rejected.type,
            payload: 'Ошибка'
        };

        expect(detailedArticleRecommendationsReducer(state, action)).toEqual({
            ...state,
            isLoading: false,
            error: 'Ошибка'
        });
    });
});