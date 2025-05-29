import {fetchProfileData} from "./fetchProfileData";
import {TestAsyncThunk} from "shared/lib/tests";
import {filledProfile} from "shared/lib/tests/mocks";

describe("fetchProfileData", () => {
    test('successful profile loading', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: filledProfile
        }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(filledProfile);
    });

    test('failure profile loading', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.reject('error'));

        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка при получении данных профиля');
    });
});