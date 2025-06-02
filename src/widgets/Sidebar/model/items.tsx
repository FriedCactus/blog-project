import {ReactNode} from "react";
import {AppPaths} from "shared/config/routes/routes";
import {Icon} from "shared/ui/Icon";

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
        icon: <Icon name="main" variant="secondary"/>
    },
    {
        text: "О сайте",
        path: AppPaths.ABOUT,
        icon: <Icon name="about" variant="secondary"/>
    },
    {
        text: "Профиль",
        path: AppPaths.PROFILE,
        icon: <Icon name="profile" variant="secondary"/>,
        authOnly: true
    },
    {
        text: "Статьи",
        path: AppPaths.ARTICLES,
        icon: <Icon name="articles" variant="secondary"/>,
        authOnly: true
    },
];