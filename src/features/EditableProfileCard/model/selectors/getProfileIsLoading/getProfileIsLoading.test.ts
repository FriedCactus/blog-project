import {getProfileIsLoading} from "./getProfileIsLoading";
import {StateSchema} from "app/providers/StoreProvider";


describe("getProfileIsLoading", () => {
    test("Should return isLoading value", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                isReadonly: false,
                validateErrors: []
            }
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});