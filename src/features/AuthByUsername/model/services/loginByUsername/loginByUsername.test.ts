import {loginByUsername} from "./loginByUsername";
import {User, userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests";

const userValue: User = {
    id: '1',
    username: '123',
    password: ""
};
const authData = {
    username: 'username',
    password: '123456'
};

describe("loginByUsername", () => {
    test('successful login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({
            data: userValue
        }));

        const result = await thunk.callThunk(authData);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('failure login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(authData);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Неверный логин или пароль');
    });
});