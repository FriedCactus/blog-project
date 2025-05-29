import {getProfileValidateErrors} from "./getProfileValidateErrors";
import {StateSchema} from "app/providers/StoreProvider";
import {ValidateProfileError} from "entities/Profile";

const validateErrors = [ValidateProfileError.INCORRECT_FIRSTNAME];

describe("getProfileValidateErrors", () => {
    test("Should return validate errors", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
                isReadonly: true,
                validateErrors
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toBe(validateErrors);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});