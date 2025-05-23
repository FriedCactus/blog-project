import {AppRouter} from "./providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";


export const App = () => {
    return (
        <div id="app" className="app">
            <Suspense fallback="">
                <NavBar/>

                <div className="content-layout">
                    <Sidebar/>
                    <div className="page-wrapper">
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};