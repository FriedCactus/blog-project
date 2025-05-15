import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {navLinks} from "shared/routes";

export const NavBar = () => {
    return (
        <div className={classNames(styles.Navbar)}>
            {
                navLinks.map(
                    ({title, path}) =>
                        <RouterLink
                            key={path}
                            to={path}
                            variant={RouterLinkVariant.SECONDARY}>
                            {title}
                        </RouterLink>
                )
            }
        </div>
    );
};

