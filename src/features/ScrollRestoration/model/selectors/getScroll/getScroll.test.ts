import {getScroll} from './getScroll';
import {StateSchema} from "app/providers/StoreProvider";


describe('getScroll', () => {
    test('should return scroll state', () => {
        const state: DeepPartial<StateSchema> = {
            scrollRestoration: {
                scroll: {
                    'testKey': 1000
                }
            }
        };

        expect(getScroll(state as StateSchema)).toEqual({
            'testKey': 1000
        });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            scrollRestoration: {
                scroll: {}
            }
        };

        expect(getScroll(state as StateSchema)).toEqual({});
    });
});