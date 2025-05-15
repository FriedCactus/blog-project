import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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