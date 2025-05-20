import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {navLinks} from "../../../shared/config/routes";
import {useTranslation} from "react-i18next";

export const NavBar = () => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.Navbar)}>
            {
                navLinks.map(
                    ({title, path}) =>
                        <RouterLink
                            key={path}
                            to={path}
                            variant={RouterLinkVariant.SECONDARY}>
                            {t(title)}
                        </RouterLink>
                )
            }
        </div>
    );
};

