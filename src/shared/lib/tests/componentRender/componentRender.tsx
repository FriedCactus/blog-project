import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";
import {ReactNode} from "react";
import {MemoryRouter} from "react-router";
import {type StateSchema, StoreProvider} from "app/providers/StoreProvider";
import type {DeepPartial} from "../../../types";

interface Options {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: Options = {}) => {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};