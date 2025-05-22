import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {RouteProps} from "react-router";
import AboutIcon from "shared/assets/icons/about-icon.svg";
import MainIcon from "shared/assets/icons/main-iconsvg.svg";
import {ReactNode} from "react";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = '*'
}

enum AppPaths {
    MAIN = '/',
    ABOUT = '/about',
    NOTFOUND = '*'
}

interface NavLink {
    title: string,
    path: AppPaths,
    icon: ReactNode
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
    [AppRoutes.NOTFOUND]: AppPaths.NOTFOUND,
};

export const routes: RouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    {
        path: RoutePaths.about,
        element: <AboutPage/>
    },
    {
        path: RoutePaths["*"],
        element: <NotFoundPage/>
    }
];

export const navLinks: NavLink[] = [
    {
        title: "Главная",
        path: AppPaths.MAIN,
        icon: <MainIcon/>
    },
    {
        title: "О сайте",
        path: AppPaths.ABOUT,
        icon: <AboutIcon/>
    },
];