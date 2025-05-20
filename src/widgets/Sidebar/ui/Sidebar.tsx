import styles from "./Sidebar.module.css";
import {classNames} from "shared/lib/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonVariant} from "shared/ui/Button/Button";

export const Sidebar = () => {
    const {i18n, t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapse = () => {
        setCollapsed(prev => !prev);
    };

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                {
                    [styles.collapsed]: collapsed
                })
            }>
            <Button
                data-testid="sidebar-collapse"
                className={styles.toggleButton}
                variant={ButtonVariant.SECONDARY}
                onClick={onToggleCollapse}>
                {t('Переключить')}
            </Button>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.themeSwitcher}/>
                <Button onClick={onToggleLanguage} variant={ButtonVariant.SECONDARY}>
                    {t('Язык')}
                </Button>
            </div>
        </div>
    );
};