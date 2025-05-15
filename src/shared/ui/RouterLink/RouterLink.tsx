import styles from "./RouterLink.module.css";
import {classNames} from "shared/lib/classNames";
import {Link, type LinkProps} from "react-router";
import {FC} from "react";

export enum RouterLinkVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface RouterLinkProps extends LinkProps {
    className?: string;
    variant?: RouterLinkVariant;
}

export const RouterLink: FC<RouterLinkProps> =
    ({
         children,
         className,
         variant = RouterLinkVariant.PRIMARY,
         ...props
     }) => {
        const {} = props;

        return (
            <Link
                className={classNames(styles.RouterLink, {}, [className, styles[variant]])}
                {...props}
            >
                {children}
            </Link>
        );
    };