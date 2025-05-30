import styles from "./NavigationLinks.module.css";
import {NavigationLink} from "../NavigationLink/NavigationLink";
import {sidebarItemsList} from "../../model/items";
import {memo, useMemo} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

interface Props {
    isCollapsed: boolean;
}

export const NavigationLinks = memo(function NavigationLinks({isCollapsed}: Props) {
    const isAuth = useSelector(getUserAuthData);
    const sidebarItems = useMemo(() => sidebarItemsList.filter(
        ({authOnly}) => authOnly ? isAuth : true
    ), [isAuth]);

    return (
        <div className={styles.NavigationLinks}>
            {
                sidebarItems.map(
                    (navLink) => <NavigationLink
                        key={navLink.path}
                        navLink={navLink}
                        isCollapsed={isCollapsed}
                    />
                )
            }
        </div>
    );
});