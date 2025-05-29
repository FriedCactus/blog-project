import {Suspense, useMemo} from "react";
import {Route, Routes} from "react-router";
import {routes} from "shared/config/routes";
import {PageLoader} from "widgets/PageLoader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    // Временный костыль
    const routesList = useMemo(() => routes.filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    return (
        <Routes>
            {
                routesList.map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader/>}>
                                {element}
                            </Suspense>
                        }
                    />
                ))
            }
        </Routes>
    );
};