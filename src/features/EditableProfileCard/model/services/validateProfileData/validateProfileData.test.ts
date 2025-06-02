import {validateProfileData} from "./validateProfileData";
import {filledProfile, ValidateProfileError} from "entities/Profile";
import {Country, Currency} from "shared/const";

describe('validateProfileData', () => {
    it(`Should return no errors`, () => {
        expect(validateProfileData(filledProfile)).toEqual([]);
    });

    it(`Should return error incorrect data`, () => {
        expect(validateProfileData()).toEqual([ValidateProfileError.INCORRECT_PROFILE_DATA]);
    });

    it(`Should return error first name`, () => {
        expect(validateProfileData({
            ...filledProfile,
            firstName: ''
        })).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
    });

    it(`Should return error last name`, () => {
        expect(validateProfileData({
            ...filledProfile,
            lastName: ''
        })).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
    });

    it(`Should return error age`, () => {
        expect(validateProfileData({
            ...filledProfile,
            age: 0
        })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it(`Should return error city`, () => {
        expect(validateProfileData({
            ...filledProfile,
            city: ''
        })).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    it(`Should return error username`, () => {
        expect(validateProfileData({
            ...filledProfile,
            username: ''
        })).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    it(`Should return error username`, () => {
        expect(validateProfileData({
            ...filledProfile,
            country: '' as Country
        })).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    it(`Should return error username`, () => {
        expect(validateProfileData({
            ...filledProfile,
            currency: '' as Currency
        })).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });
});