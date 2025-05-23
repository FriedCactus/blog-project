import styles from "./NavigationLinks.module.css";
import {navLinks} from "shared/config/routes";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";

interface Props {
    isCollapsed: boolean;
}

export const NavigationLinks = ({isCollapsed}: Props) => {
    const {t} = useTranslation();

    return <div className={styles.NavigationLinks}>
        {
            navLinks.map(
                ({title, path, icon}) =>
                    <RouterLink
                        key={path}
                        className={classNames(
                            '',
                            {
                                [styles.minified]: isCollapsed
                            },
                            [styles.link]
                        )}
                        to={path}
                        variant={RouterLinkVariant.SECONDARY}>
                        {icon}
                        {t(title)}
                    </RouterLink>
            )
        }
    </div>;
};