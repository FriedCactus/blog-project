import "./styles/index.css";
import {Routes, Route, Link} from "react-router";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE THEME</button>

        <Link to="/">Main</Link>
        <Link to="/about">About</Link>

        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    </div>;
};