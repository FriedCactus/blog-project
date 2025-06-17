import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {memo, useCallback, useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
import {CollapseButton} from "./CollapseButton/CollapseButton";
import {NavigationLinks} from "./NavigationLinks/NavigationLinks";

export const Sidebar = memo(function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, []);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                {
                    [styles.collapsed]: isCollapsed
                })
            }>

            <div className={styles.mainBlock}>
                <CollapseButton onCollapse={onCollapse}/>
                <div>

                </div>
                <NavigationLinks isCollapsed={isCollapsed}/>
            </div>


            <div className={classNames(
                '',
                {
                    [styles.flipped]: isCollapsed
                },
                [styles.switchers]
            )}>
                <ThemeSwitcher className={styles.themeSwitcher}/>
                <LangSwitcher short={isCollapsed}/>
            </div>
        </aside>
    );
});