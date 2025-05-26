import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ProfilePage} from "pages/ProfilePage";
import {NotFoundPage} from "pages/NotFoundPage";
import {RouteProps} from "react-router";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOTFOUND = '*'
}

export enum AppPaths {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOTFOUND = '*'
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
    [AppRoutes.PROFILE]: AppPaths.PROFILE,
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
        path: RoutePaths.profile,
        element: <ProfilePage/>
    },
    {
        path: RoutePaths["*"],
        element: <NotFoundPage/>
    }
];