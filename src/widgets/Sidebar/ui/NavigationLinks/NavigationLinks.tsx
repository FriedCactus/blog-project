import styles from "./NavigationLinks.module.css";
import {NavigationLink} from "../NavigationLink/NavigationLink";
import {sidebarItemsList} from "../../model/items";
import {memo} from "react";

interface Props {
    isCollapsed: boolean;
}

export const NavigationLinks = memo(function NavigationLinks({isCollapsed}: Props) {
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