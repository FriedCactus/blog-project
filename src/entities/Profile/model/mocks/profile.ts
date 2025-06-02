import {Profile} from "../types/profile";
import {Country, Currency} from "shared/const";

export const filledProfile: Profile = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 30,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Москва",
    username: "admin",
    avatar: ""
};

export const emptyProfile: Profile = {
    firstName: "",
    lastName: "",
    age: 0,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "",
    username: "",
    avatar: ""
};