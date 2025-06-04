import {fetchProfileData} from "./fetchProfileData";
import {TestAsyncThunk} from "shared/lib/tests";
import {filledProfile} from "entities/Profile";

describe("fetchProfileData", () => {
    test('successful profile loading', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: filledProfile
        }));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(filledProfile);
    });

    test('failure profile loading', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk("1");

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении данных профиля');
    });
});