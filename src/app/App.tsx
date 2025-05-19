import "./styles/index.css";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";


export const App = () => {
    const {theme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <NavBar/>

        <div className="content-layout">
            <Sidebar/>
            <div className="page-wrapper">
                <AppRouter/>
            </div>
        </div>
    </div>;
};