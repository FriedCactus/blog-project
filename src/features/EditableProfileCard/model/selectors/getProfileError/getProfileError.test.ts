import {getProfileError} from "./getProfileError";
import {StateSchema} from "app/providers/StoreProvider";


describe("getProfileError", () => {
    test("Should return error value", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Error',
                isLoading: false,
                isReadonly: false,
                validateErrors: []
            }
        };

        expect(getProfileError(state as StateSchema)).toBe('Error');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});