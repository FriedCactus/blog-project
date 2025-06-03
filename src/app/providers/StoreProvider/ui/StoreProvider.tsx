import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {LazyStateSchema, StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";

interface Props {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<LazyStateSchema>>,
}

export const StoreProvider = (props: PropsWithChildren<Props>) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props;

    const store = createReduxStore(initialState as StateSchema, asyncReducers);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};