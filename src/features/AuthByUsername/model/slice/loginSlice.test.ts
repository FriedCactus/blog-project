import {loginReducer, loginActions} from './loginSlice';
import {LoginSchema} from "../types/loginSchema";

const state: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

describe('loginSlice', () => {
    test('Should set username', () => {
        expect(loginReducer(state, loginActions.setUsername('Username'))).toEqual({
            ...state,
            username: 'Username'
        });
    });

    test('Should set password', () => {
        expect(loginReducer(state, loginActions.setPassword('123456'))).toEqual({
            ...state,
            password: '123456'
        });
    });

    test('Should work with empty state', () => {

        expect(loginReducer(undefined, loginActions.setUsername('Username'))).toEqual({
            ...state,
            username: 'Username'
        });
    });
});