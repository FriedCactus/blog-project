import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "../const";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        // Имитация считывания токена
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
});