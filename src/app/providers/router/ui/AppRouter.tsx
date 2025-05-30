import {Route, Routes} from "react-router";
import {AppRouteProps, routes} from "shared/config/routes";
import {ProtectedRoute} from "./ProtectedRoute/ProtectedRoute";
import {Suspense, useCallback} from "react";
import {PageLoader} from "widgets/PageLoader";

export const AppRouter = () => {
    const routeRender = useCallback((route: AppRouteProps) => {
        const element =
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <ProtectedRoute>{element}</ProtectedRoute> : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {routes.map(routeRender)}
        </Routes>
    );
};