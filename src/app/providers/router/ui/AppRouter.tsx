import {Route, Routes} from "react-router";
import {ProtectedRoute} from "./ProtectedRoute/ProtectedRoute";
import {Suspense, useCallback} from "react";
import {PageLoader} from "widgets/PageLoader";
import {AppRouteProps} from "../model/types/routes";
import {routeItems} from "../model/items/routeItems";
import {Page} from "shared/ui/Page";

export const AppRouter = () => {
    const routeRender = useCallback((route: AppRouteProps) => {
        const element =
            <Suspense fallback={
                <Page>
                    <PageLoader/>
                </Page>
            }>
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
            {routeItems.map(routeRender)}
        </Routes>
    );
};