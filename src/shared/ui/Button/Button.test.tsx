import {Button, ButtonVariant} from "./Button";
import {renderWithTranslation} from "shared/lib/tests";

describe('Button', () => {
    test('Renders with default variant', () => {
        const {getByText} = renderWithTranslation(
            <Button>
                Тест кнопки
            </Button>
        );

        expect(getByText("Тест кнопки")).toBeInTheDocument();
    });

    test('Renders with secondary variant', () => {
        const {getByText} = renderWithTranslation(
            <Button variant={ButtonVariant.SECONDARY}>
                Тест кнопки
            </Button>
        );

        expect(getByText("Тест кнопки")).toHaveClass('secondary');
    });
});