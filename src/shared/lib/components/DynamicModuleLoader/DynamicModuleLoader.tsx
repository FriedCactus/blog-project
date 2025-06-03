import {PropsWithChildren, useEffect} from "react";
import {Reducer} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../hooks";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider";
import {useStore} from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface Props {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: PropsWithChildren<Props>) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer);

            dispatch({
                type: `@@INIT ${key} reducer`
            });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((key) => {
                    store.reducerManager.remove(key as StateSchemaKey);

                    dispatch({
                        type: `@@REMOVE ${key} reducer`
                    });
                });
            }
        };
        //eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};