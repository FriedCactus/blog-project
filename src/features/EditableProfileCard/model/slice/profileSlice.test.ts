import {profileReducer, profileActions} from './profileSlice';
import {ProfileSchema} from "../types/profile";
import {emptyProfile, filledProfile} from "shared/lib/tests/mocks";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";

const state: ProfileSchema = {
    isLoading: false,
    error: "error",
    isReadonly: false,
    validateErrors: [],
    formData: {
        ...emptyProfile
    },
    profileData: {
        ...filledProfile
    }
};

describe('profileSlice', () => {
    test('should set isReadonly', () => {
        expect(profileReducer(state, profileActions.setIsReadonly(true))).toEqual({
            ...state,
            isReadonly: true
        });
    });

    test('should undo changes', () => {
        expect(profileReducer(state, profileActions.undoChanges())).toEqual({
            ...state,
            formData: {
                ...filledProfile
            }
        });
    });

    test('should update profile', () => {
        expect(profileReducer(state, profileActions.updateProfile({
            firstName: 'Иван'
        }))).toEqual({
            ...state,
            formData: {
                ...emptyProfile,
                firstName: 'Иван'
            }
        });
    });

    test('fetchProfileData should clear loading and errors while pending', () => {
        const action = {type: fetchProfileData.pending.type};

        expect(profileReducer(state, action)).toEqual({
            ...state,
            error: '',
            isLoading: true
        });
    });

    test('fetchProfileData should update state when fulfilled', () => {
        const action = {
            type: fetchProfileData.fulfilled.type,
            payload: filledProfile
        };

        expect(profileReducer(state, action)).toEqual({
            ...state,
            profileData: {
                ...filledProfile
            },
            formData: {
                ...filledProfile
            }
        });
    });

    test('fetchProfileData should update error when rejected', () => {
        const action = {
            type: fetchProfileData.rejected.type,
            payload: 'Ошибка'
        };

        expect(profileReducer(state, action)).toEqual({
            ...state,
            error: 'Ошибка'
        });
    });
});