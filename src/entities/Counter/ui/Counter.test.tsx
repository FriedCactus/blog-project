import {Counter} from "./Counter";
import {componentRender} from "shared/lib/tests";
import type {StateSchema} from "app/providers/StoreProvider";
import {fireEvent} from "@testing-library/dom";

const initialState: DeepPartial<StateSchema> = {
    counter: {value: 10}
};

describe("Counter", () => {
    test("should render correctly", () => {
        const {getByTestId} = componentRender(<Counter/>, {initialState});
        expect(getByTestId('value-title')).toHaveTextContent('Значение = 10');
    });

    test("increment should work", () => {
        const {getByTestId} = componentRender(<Counter/>, {initialState});

        fireEvent.click(getByTestId('increment-btn'));
        expect(getByTestId('value-title')).toHaveTextContent('Значение = 11');
    });

    test("decrement should work", () => {
        const {getByTestId} = componentRender(<Counter/>, {initialState});

        fireEvent.click(getByTestId('decrement-btn'));
        expect(getByTestId('value-title')).toHaveTextContent('Значение = 9');
    });
});