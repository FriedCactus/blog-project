import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {memo, useCallback, useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
import {CollapseButton} from "./CollapseButton/CollapseButton";
import {NavigationLinks} from "./NavigationLinks/NavigationLinks";
import {VStack, Flex} from "shared/ui/Stack";

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

            <VStack align="center" justify="between" hMax>
                <VStack align="center" gap="l">
                    <CollapseButton onCollapse={onCollapse}/>
                    <NavigationLinks isCollapsed={isCollapsed}/>
                </VStack>

                <Flex
                    direction={isCollapsed ? 'column' : 'row'}
                    align="center"
                    justify="center"
                    gap="l"
                >
                    <ThemeSwitcher className={styles.themeSwitcher}/>
                    <LangSwitcher short={isCollapsed}/>
                </Flex>
            </VStack>
        </aside>
    );
});