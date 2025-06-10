import {getScrollByPath} from "./getScrollByPath";
import {StateSchema} from "app/providers/StoreProvider";

const state: DeepPartial<StateSchema> = {
    scrollRestoration: {
        scroll: {
            'testKey': 1000
        }
    }
};

describe("getScrollByPath", () => {
    test("Should return scroll position by path key", () => {
        expect(getScrollByPath(state as StateSchema, 'testKey')).toBe(1000);
    });

    test("Should return 0 when position not found", () => {
        expect(getScrollByPath(state as StateSchema, 'notFoundKey')).toBe(0);
    });
});