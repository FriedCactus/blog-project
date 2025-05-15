import "./styles/index.css";
import {Routes, Route, Link} from "react-router";
import {AboutPageAsync} from "./components/pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./components/pages/MainPage/MainPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE THEME</button>

        <Link to="/">Main</Link>
        <Link to="/about">About</Link>

        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<MainPageAsync/>}/>
                <Route path="/about" element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>;
};