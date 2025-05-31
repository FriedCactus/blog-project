import MainIcon from "shared/assets/icons/main-icon.svg";
import AboutIcon from "shared/assets/icons/about-icon.svg";
import ProfileIcon from "shared/assets/icons/profile-icon.svg";
import ArticlesIcon from "shared/assets/icons/articles-icon.svg";
import {ReactNode} from "react";
import {AppPaths} from "shared/config/routes/routes";

export interface NavLink {
    text: string,
    path: AppPaths,
    icon: ReactNode,
    authOnly?: boolean
}

export const sidebarItemsList: NavLink[] = [
    {
        text: "Главная",
        path: AppPaths.MAIN,
        icon: <MainIcon/>
    },
    {
        text: "О сайте",
        path: AppPaths.ABOUT,
        icon: <AboutIcon/>
    },
    {
        text: "Профиль",
        path: AppPaths.PROFILE,
        icon: <ProfileIcon width={20}/>,
        authOnly: true
    },
    {
        text: "Статьи",
        path: AppPaths.ARTICLES,
        icon: <ArticlesIcon/>,
        authOnly: true
    },
];