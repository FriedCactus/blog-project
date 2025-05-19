import {classNames} from "./classNames";

describe("classNames", () => {
    it('Work with string param', () => {
        expect(classNames('testClass', {}, [])).toBe('testClass');
    });

    it('Work with additional param', () => {
        const expected = 'testClass class1 class2';
        expect(classNames('testClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    it('Work with conditional param', () => {
        const expected = 'testClass class1 class2 trueClass';

        expect(classNames('testClass', {
            trueClass: true,
            falseClass: false,
        }, ['class1', 'class2'])).toBe(expected);
    });

    it('Work with conditional param undefined', () => {
        expect(classNames('testClass', {
            undefinedClass: undefined,
        })).toBe('testClass');
    });

    it('Work with empty params', () => {
        expect(classNames('', {}, [])).toBe('');
    });
});