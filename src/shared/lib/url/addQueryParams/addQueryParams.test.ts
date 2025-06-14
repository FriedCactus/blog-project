import {getQueryParams} from "./addQueryParams";

describe('addQueryParams', () => {
    test('Should work with one param', () => {
        const params = getQueryParams({
            test: 'value'
        });

        expect(params).toBe('?test=value');
    });

    test('Should work with many params', () => {
        const params = getQueryParams({
            test: 'value',
            search: 'search_value',
        });

        expect(params).toBe('?test=value&search=search_value');
    });

    test('Should work with array', () => {
        const params = getQueryParams({
            test: ['value', 'another_value'],
        });

        expect(params).toBe('?test=value%2Canother_value');
    });

    test('Shouldn`t add empty params', () => {
        const params = getQueryParams({
            test: 'value',
            empty: '',
        });

        expect(params).toBe('?test=value');
    });

    test('Should work without params', () => {
        const params = getQueryParams({});

        expect(params).toBe('?');
    });
});