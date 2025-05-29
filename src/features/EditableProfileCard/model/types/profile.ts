import {Profile, ValidateProfileError} from "entities/Profile";

export interface ProfileSchema {
    profileData?: Profile;
    formData?: Profile;
    isLoading: boolean;
    isReadonly: boolean;
    error?: string;
    validateErrors: ValidateProfileError[];
}