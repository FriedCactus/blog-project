import {getLoginIsLoading} from "./getLoginIsLoading";
import {StateSchema} from "app/providers/StoreProvider";

describe("getLoginIsLoading", () => {
    test("Should return isLoadingValue", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: '',
                username: "",
                password: "",
                isLoading: true
            }
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toBe(undefined);
    });
});