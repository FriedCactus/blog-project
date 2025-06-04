import {StateSchema} from "app/providers/StoreProvider";
import {getCommentSendingError} from "./getCommentSendingError";

describe("getCommentSendingError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            detailedArticleComments: {
                commentSendingError: 'Ошибка отправки',
                isLoading: false,
                isCommentSending: false,
                ids: [],
                entities: {}
            }
        };

        expect(getCommentSendingError(state as StateSchema)).toEqual('Ошибка отправки');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getCommentSendingError(state as StateSchema)).toBe(undefined);
    });
});