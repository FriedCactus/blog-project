import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {routes} from "shared/routes";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routes.map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};