import {AppPaths} from "shared/config/routes/routes";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import {DetailedArticlePage} from "pages/DetailedArticlePage";
import {NotFoundPage} from "pages/NotFoundPage";
import {AppRouteProps, AppRoutes} from "../types/routes";

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
    [AppRoutes.PROFILE]: AppPaths.PROFILE,
    [AppRoutes.ARTICLES]: AppPaths.ARTICLES,
    [AppRoutes.ARTICLE_DETAILS]: AppPaths.ARTICLE_DETAILS,
    [AppRoutes.NOTFOUND]: AppPaths.NOTFOUND,
};

export const routeItems: AppRouteProps[] = [
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
        element: <ProfilePage/>,
        authOnly: true
    },
    {
        path: RoutePaths.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    {
        path: RoutePaths.articleDetails,
        element: <DetailedArticlePage/>,
        authOnly: true
    },
    {
        path: RoutePaths["*"],
        element: <NotFoundPage/>
    }
];