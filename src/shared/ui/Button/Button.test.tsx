import {Button, ButtonVariant} from "./Button";
import {componentRender} from "shared/lib/tests";

describe('Button', () => {
    test('Renders with default variant', () => {
        const {getByText} = componentRender(
            <Button>
                Тест кнопки
            </Button>
        );

        expect(getByText("Тест кнопки")).toBeInTheDocument();
    });

    test('Renders with secondary variant', () => {
        const {getByText} = componentRender(
            <Button variant={ButtonVariant.SECONDARY}>
                Тест кнопки
            </Button>
        );

        expect(getByText("Тест кнопки")).toHaveClass('secondary');
    });
});