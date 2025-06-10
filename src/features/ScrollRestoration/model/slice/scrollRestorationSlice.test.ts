import {scrollRestorationReducer, scrollRestorationActions} from './scrollRestorationSlice';
import {ScrollRestorationSchema} from "../types/scrollRestorationSchema";

const state: ScrollRestorationSchema = {
    scroll: {}
};

describe('scrollRestorationSlice', () => {
    test('should set scroll position', () => {
        const scrollPosition = {
            path: 'testKey',
            position: 1000
        };

        expect(
            scrollRestorationReducer(state, scrollRestorationActions.setScrollPosition(scrollPosition))
        ).toEqual({
            scroll: {
                testKey: 1000
            }
        });
    });
});