import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export const Sidebar = () => {
    const {i18n} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapse = () => {
        setCollapsed(prev => !prev);
    };

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(
            styles.Sidebar,
            {
                [styles.collapsed]: collapsed
            })
        }>
            <button className={styles.toggleButton} onClick={onToggleCollapse}>Toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.themeSwitcher}/>
                <button onClick={onToggleLanguage}>Язык</button>
            </div>
        </div>
    );
};