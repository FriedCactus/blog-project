import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar/>

                <div className="content-layout">
                    <Sidebar/>
                    <div className="page-wrapper">
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
            <div id="portal"/>
        </div>
    );
};