import {Country, Currency} from "shared/const";

export enum ValidateProfileError {
    INCORRECT_PROFILE_DATA = "INCORRECT_PROFILE_DATA",
    INCORRECT_FIRSTNAME = "INCORRECT_FIRSTNAME",
    INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_CITY = "INCORRECT_CITY",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    INCORRECT_USERNAME = "INCORRECT_USERNAME",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    "firstName": string,
    "lastName": string,
    "age": number,
    "currency": Currency,
    "country": Country,
    "city": string,
    "username": string,
    "avatar": string
}