import {getProfileData} from "./getProfileData";
import {StateSchema} from "app/providers/StoreProvider";
import {Country, Currency} from "shared/const";
import {Profile} from "entities/Profile";

const profileData: Profile = {
    id: "",
    userId: "",
    firstName: "",
    lastName: "",
    age: 0,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "",
    username: "",
    avatar: "",
};

describe("getProfileData", () => {
    test("Should return profile data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                profileData,
                isLoading: false,
                isReadonly: false,
                validateErrors: []
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(profileData);
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});