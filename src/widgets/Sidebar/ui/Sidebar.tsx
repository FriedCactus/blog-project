import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(
            styles.Sidebar,
            {
                [styles.collapsed]: collapsed
            })
        }>
            <button className={styles.toggleButton} onClick={onToggle}>Toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.themeSwitcher}/>
            </div>
        </div>
    );
};