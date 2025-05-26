import {loginByUsername} from "./loginByUsername";
import axios from "axios";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const userValue = {username: '123', id: '1'};
const authData = {
    username: 'username',
    password: '123456'
};

describe("loginByUsername", () => {
    test('successful login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue
        }));

        const result = await thunk.callThunk(authData);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('failure login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        mockedAxios.post.mockReturnValue(Promise.reject('error'));

        const action = loginByUsername(authData);
        const result = await action(thunk.dispatch, thunk.getState, undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Неверный логин или пароль');
    });
});