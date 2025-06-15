import {AppPaths} from "shared/config/routes/routes";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import {DetailedArticlePage} from "pages/DetailedArticlePage";
import {NotFoundPage} from "pages/NotFoundPage";
import {AppRouteProps} from "../types/routes";
import {ViewProfilePage} from "pages/ViewProfilePage";
import {ArticleEditPage} from "pages/ArticleEditPage";

export const routeItems: AppRouteProps[] = [
    {
        path: AppPaths.MAIN,
        element: <MainPage/>
    },
    {
        path: AppPaths.ABOUT,
        element: <AboutPage/>
    },
    {
        path: AppPaths.MY_PROFILE,
        element: <ProfilePage/>,
        authOnly: true
    },
    {
        path: AppPaths.PROFILE,
        element: <ViewProfilePage/>,
    },
    {
        path: AppPaths.ARTICLES,
        element: <ArticlesPage/>,
    },
    {
        path: AppPaths.ARTICLE_DETAILS,
        element: <DetailedArticlePage/>,
    },
    {
        path: AppPaths.EDIT_ARTICLE,
        element: <ArticleEditPage/>,
    },
    {
        path: AppPaths.CREATE_ARTICLE,
        element: <ArticleEditPage/>,
    },
    {
        path: AppPaths.NOTFOUND,
        element: <NotFoundPage/>
    }
];