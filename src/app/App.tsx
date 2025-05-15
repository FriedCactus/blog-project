import "./styles/index.css";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <button onClick={toggleTheme}>TOGGLE THEME</button>

        <AppRouter/>
    </div>;
};