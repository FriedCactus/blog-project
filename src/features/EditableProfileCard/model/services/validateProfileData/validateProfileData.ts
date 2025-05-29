import {Profile, ValidateProfileError} from "entities/Profile";

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.INCORRECT_PROFILE_DATA];
    }

    const errors: ValidateProfileError[] = [];
    const {lastName, firstName, age, city, username, country, currency} = profile;

    if (!firstName) {
        errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
    }

    if (!lastName) {
        errors.push(ValidateProfileError.INCORRECT_LASTNAME);
    }

    if (!age || isNaN(age) || age < 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    return errors;
};