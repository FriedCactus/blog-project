import {PropsWithChildren, useEffect} from "react";
import {Reducer} from "@reduxjs/toolkit";
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {rootReducer} from "app/providers/StoreProvider/config/store";
import {useAppDispatch} from "../../hooks";

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;

interface Props {
    reducers: ReducersList;
}

export const DynamicModuleLoader = (props: PropsWithChildren<Props>) => {
    const {
        children,
        reducers
    } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerPath, reducer]) => {
            rootReducer.inject({
                reducerPath,
                reducer
            });

            dispatch({
                type: `@@INIT ${reducerPath} reducer`
            });
        });
    }, [dispatch, reducers]);

    return (
        <>
            {children}
        </>
    );
};