import {getProfileFormData} from "./getProfileFormData";
import {StateSchema} from "app/providers/StoreProvider";
import {Country, Currency} from "shared/const";

const formData = {
    firstName: "",
    lastName: "",
    age: 0,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "",
    username: "",
    avatar: ""
};

describe("getProfileFormData", () => {
    test("Should return form data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData,
                isLoading: false,
                isReadonly: false,
                validateErrors: []
            }
        };

        expect(getProfileFormData(state as StateSchema)).toEqual(formData);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFormData(state as StateSchema)).toBe(undefined);
    });
});