import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Navigate} from "react-router";
import {PropsWithChildren} from "react";

export const ProtectedRoute = ({children}: PropsWithChildren) => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return (
            <Navigate to="/"/>
        );
    }
    return children;
};