import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ProfilePage} from "pages/ProfilePage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';
import {RouteProps} from "react-router";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    NOTFOUND = '*'
}

export enum AppPaths {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    ARTICLES = '/articles',
    ARTICLE_DETAILS = '/articles/*',
    NOTFOUND = '*'
}

const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.ABOUT]: AppPaths.ABOUT,
    [AppRoutes.PROFILE]: AppPaths.PROFILE,
    [AppRoutes.ARTICLES]: AppPaths.ARTICLES,
    [AppRoutes.ARTICLE_DETAILS]: AppPaths.ARTICLE_DETAILS,
    [AppRoutes.NOTFOUND]: AppPaths.NOTFOUND,
};

export const routes: AppRouteProps[] = [
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
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    {
        path: RoutePaths["*"],
        element: <NotFoundPage/>
    }
];