import styles from "./NavigationLinks.module.css";
import {NavigationLink} from "../NavigationLink/NavigationLink";
import {sidebarItems} from "../../model/items/sidebarItems";
import {memo, useMemo} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

interface Props {
    isCollapsed: boolean;
}

export const NavigationLinks = memo(function NavigationLinks({isCollapsed}: Props) {
    const isAuth = useSelector(getUserAuthData);
    const sidebarItemsList = useMemo(() => sidebarItems.filter(
        ({authOnly}) => authOnly ? isAuth : true
    ), [isAuth]);

    return (
        <div className={styles.NavigationLinks}>
            {
                sidebarItemsList.map(
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