import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import type {StateSchema} from "../config/StateSchema";
import {DeepPartial} from "../../../../shared/types";

interface Props {
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: PropsWithChildren<Props>) => {
    const {
        children,
        initialState
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};