import {getUserId} from "./getUserId";
import {StateSchema} from "app/providers/StoreProvider";
import {userMock} from "../../mocks/user";

describe("getUserId", () => {
    test("Should return user id", () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: userMock
            }
        };

        expect(getUserId(state as StateSchema)).toEqual('1');
    });

    test("Should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getUserId(state as StateSchema)).toBe(undefined);
    });
});