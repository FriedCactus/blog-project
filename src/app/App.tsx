import "./styles/index.css";
import {Link} from "react-router";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE THEME</button>

        <Link to="/">Main</Link>
        <Link to="/about">About</Link>

        <AppRouter/>
    </div>;
};