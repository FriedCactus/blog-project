import {getLoginUsername} from "./getLoginUsername";
import {DeepPartial} from "shared/types";
import {StateSchema} from "app/providers/StoreProvider";

describe("getLoginUsername", () => {
    test("Should return username value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: '',
                username: "Username",
                password: "",
                isLoading: true
            }
        };

        expect(getLoginUsername(state as StateSchema)).toBe('Username');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toBe(undefined);
    });
});