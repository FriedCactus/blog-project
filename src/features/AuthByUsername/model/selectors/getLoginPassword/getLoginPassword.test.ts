import {getLoginPassword} from "./getLoginPassword";
import {DeepPartial} from "shared/types";
import {StateSchema} from "app/providers/StoreProvider";

describe("getLoginPassword", () => {
    test("Should return password value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: '',
                username: "",
                password: "123456",
                isLoading: false
            }
        };

        expect(getLoginPassword(state as StateSchema)).toBe('123456');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe(undefined);
    });
});