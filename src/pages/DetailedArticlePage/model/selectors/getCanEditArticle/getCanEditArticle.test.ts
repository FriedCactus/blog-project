import {StateSchema} from "app/providers/StoreProvider";
import {getCanEditArticle} from "./getCanEditArticle";
import {userMock} from "entities/User";
import {articleMock} from "entities/Article";

const state: DeepPartial<StateSchema> = {
    user: {
        authData: userMock
    },
    detailedArticle: {
        article: articleMock,
        isLoading: false
    }
};

describe("getCanEditArticle", () => {
    test("Should return true if article.id = user.id", () => {
        expect(getCanEditArticle(state as StateSchema)).toBe(true);
    });

    test("Should return true if article.id != user.id", () => {
        const stateWithAnotherUser: DeepPartial<StateSchema> = {
            ...state,
            user: {
                authData: {
                    ...userMock,
                    id: '2'
                }
            },
        };

        expect(getCanEditArticle(stateWithAnotherUser as StateSchema)).toBe(false);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getCanEditArticle(state as StateSchema)).toBe(false);
    });
});