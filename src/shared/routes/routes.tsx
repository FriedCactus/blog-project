import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

enum AppPaths {
    MAIN = '/',
    ABOUT = '/about',
}

interface NavLink {
    title: string,
    path: AppPaths
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
};

export const routes: RouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    {
        path: RoutePaths.about,
        element: <AboutPage/>
    }];

export const navLinks: NavLink[] = [
    {
        title: "Главная",
        path: AppPaths.MAIN
    },
    {
        title: "О сайте",
        path: AppPaths.ABOUT
    },
];