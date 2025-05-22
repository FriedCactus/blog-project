import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
import {CollapseButton} from "widgets/Sidebar/ui/CollapseButton/CollapseButton";
import {NavigationLinks} from "widgets/Sidebar/ui/NavigationLinks/NavigationLinks";

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                {
                    [styles.collapsed]: isCollapsed
                })
            }>


            <div className={styles.mainBlock}>
                <CollapseButton onCollapse={onCollapse}/>
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
        </div>
    );
};