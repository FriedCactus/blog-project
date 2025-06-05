import {AppPaths} from "shared/config/routes/routes";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import {DetailedArticlePage} from "pages/DetailedArticlePage";
import {NotFoundPage} from "pages/NotFoundPage";
import {AppRouteProps, AppRoutes} from "../types/routes";
import {ViewProfilePage} from "pages/ViewProfilePage";

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
    [AppRoutes.MY_PROFILE]: AppPaths.MY_PROFILE,
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
        path: RoutePaths.myProfile,
        element: <ProfilePage/>,
        authOnly: true
    },
    {
        path: RoutePaths.profile,
        element: <ViewProfilePage/>,
    },
    {
        path: RoutePaths.articles,
        element: <ArticlesPage/>,
    },
    {
        path: RoutePaths.articleDetails,
        element: <DetailedArticlePage/>,
    },
    {
        path: RoutePaths["*"],
        element: <NotFoundPage/>
    }
];