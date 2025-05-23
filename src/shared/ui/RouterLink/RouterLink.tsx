import styles from "./RouterLink.module.css";
import {classNames} from "shared/lib/classNames";
import {Link, type LinkProps} from "react-router";

export enum RouterLinkVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface Props extends LinkProps {
    className?: string;
    variant?: RouterLinkVariant;
}

export const RouterLink =
    ({
         children,
         className,
         variant = RouterLinkVariant.PRIMARY,
         ...props
     }: Props) => {

        return (
            <Link
                className={classNames(styles.RouterLink, {}, [className, styles[variant]])}
                {...props}
            >
                {children}
            </Link>
        );
    };