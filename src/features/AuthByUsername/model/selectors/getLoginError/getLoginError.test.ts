import {getLoginError} from "./getLoginError";
import {StateSchema} from "app/providers/StoreProvider";

describe("getLoginError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error',
                username: "",
                password: "",
                isLoading: false
            }
        };

        expect(getLoginError(state as StateSchema)).toBe('Error');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});