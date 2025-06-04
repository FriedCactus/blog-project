import {updateProfileData} from "./updateProfileData";
import {TestAsyncThunk} from "shared/lib/tests";
import {filledProfile, ValidateProfileError} from "entities/Profile";

const state = {
    profile: {
        formData: filledProfile,
        isLoading: false,
        isReadonly: false,
        validateErrors: []
    }
};

describe("updateProfileData", () => {
    test('successful update profile', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.api.put.mockReturnValue(Promise.resolve({
            data: filledProfile
        }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(filledProfile);
    });

    test('should fail with server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.api.put.mockReturnValue(Promise.reject('Error'));

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('should fail with validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                ...state.profile,
                formData: {
                    ...state.profile.formData,
                    firstName: ''
                }
            }
        });

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
    });

    test('should fail with empty state', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {});

        const result = await thunk.callThunk('1');

        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_PROFILE_DATA]);
    });
});