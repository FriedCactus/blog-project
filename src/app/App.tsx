import {AppRouter} from "./providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks";
import {getUserInited, userActions} from "entities/User";
import {useSelector} from "react-redux";

export const App = () => {
    const dispatch = useAppDispatch();
    const userInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div id="app" className="app">
            <Suspense fallback="">
                <NavBar/>

                <div className="content-layout">
                    <Sidebar/>
                    {userInited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};