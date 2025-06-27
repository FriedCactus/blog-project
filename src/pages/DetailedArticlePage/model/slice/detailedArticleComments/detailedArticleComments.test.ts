import {
    fetchCommentsByArticleId
} from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {detailedArticleCommentsReducer} from "./detailedArticleComments";
import {DetailedArticleCommentsSchema} from "../../types/detailedArticleCommentsSchema";
import {articleCommentEntitiesMock} from "../../mocks/articleComment";
import {
    addArticleComment
} from "../../services/addArticleComment/addArticleComment";

const state: DetailedArticleCommentsSchema = {
    isLoading: false,
    isCommentSending: false,
    ids: [],
    entities: {}
};

describe("detailedArticleComments", () => {
    test('fetchCommentsByArticleId should clear loading and error while pending', () => {
        const action = {type: fetchCommentsByArticleId.pending.type};

        expect(detailedArticleCommentsReducer(state, action)).toEqual({
            ...state,
            isLoading: true,
            error: ''
        });
    });

    test('fetchCommentsByArticleId should update state when fulfilled', () => {
        const action = {
            type: fetchCommentsByArticleId.fulfilled.type,
            payload: Object.values(articleCommentEntitiesMock)
        };

        expect(detailedArticleCommentsReducer(state, action)).toEqual({
            ...state,
            ids: Object.keys(articleCommentEntitiesMock),
            entities: articleCommentEntitiesMock
        });
    });

    test('fetchCommentsByArticleId should update error when rejected', () => {
        const action = {
            type: fetchCommentsByArticleId.rejected.type,
            payload: 'Ошибка',
        };

        expect(detailedArticleCommentsReducer(state, action)).toEqual({
            ...state,
            error: 'Ошибка'
        });
    });

    test('addArticleComment should clear isCommentSending and commentSendingError while pending', () => {
        const action = {type: addArticleComment.pending.type};

        expect(detailedArticleCommentsReducer(state, action)).toEqual({
            ...state,
            isCommentSending: true,
            commentSendingError: ''
        });
    });

    test('addArticleComment should update isCommentSending', () => {
        const action = {
            type: addArticleComment.fulfilled.type,
            payload: Object.values(articleCommentEntitiesMock)
        };

        expect(detailedArticleCommentsReducer({
                ...state,
                isCommentSending: true,
            },
            action)).toEqual({
            ...state,
            isCommentSending: false
        });
    });

    test('addArticleComment should update isCommentSending and commentSendingError while rejected', () => {
        const action = {
            type: addArticleComment.rejected.type,
            payload: 'Ошибка'
        };

        expect(detailedArticleCommentsReducer(state, action)).toEqual({
            ...state,
            commentSendingError: 'Ошибка'
        });
    });
});