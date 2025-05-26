import styles from "./NavigationLink.module.css";
import {classNames} from "shared/lib/classNames";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {useTranslation} from "react-i18next";
import type {NavLink} from "../../model/items";

interface Props {
    navLink: NavLink;
    isCollapsed: boolean;
}

export const NavigationLink = (props: Props) => {
    const {navLink, isCollapsed} = props;
    const {path, icon, text} = navLink;

    const {t} = useTranslation();

    return (
        <RouterLink
            className={classNames(
                '',
                {
                    [styles.minified]: isCollapsed
                },
                [styles.NavigationLink]
            )}
            to={path}
            variant={RouterLinkVariant.SECONDARY}>
            {icon}
            {t(text)}
        </RouterLink>
    );
};