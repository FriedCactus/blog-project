import {getProfileIsReadonly} from "./getProfileIsReadonly";
import {StateSchema} from "app/providers/StoreProvider";


describe("getProfileIsReadonly", () => {
    test("Should return isReadonly value", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
                isReadonly: true,
                validateErrors: []
            }
        };

        expect(getProfileIsReadonly(state as StateSchema)).toBe(true);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsReadonly(state as StateSchema)).toBe(undefined);
    });
});