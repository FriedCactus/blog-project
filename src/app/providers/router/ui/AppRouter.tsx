import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {routes} from "../../../../shared/config/routes";
import {PageLoader} from "widgets/PageLoader";

export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(({path, element}) => (
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