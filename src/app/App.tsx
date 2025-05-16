import "./styles/index.css";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


export const App = () => {
    const {theme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <NavBar/>
        <ThemeSwitcher/>
        <AppRouter/>
    </div>;
};