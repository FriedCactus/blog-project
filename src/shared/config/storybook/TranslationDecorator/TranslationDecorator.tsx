import {Decorator} from "@storybook/react";
import {I18nextProvider} from "react-i18next";
import {i18n} from "../../i18n";

export const TranslationDecorator: Decorator = (Story) => (
    <I18nextProvider i18n={i18n}>
        <Story/>
    </I18nextProvider>
);