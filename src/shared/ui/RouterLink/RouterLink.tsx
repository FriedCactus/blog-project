import styles from "./RouterLink.module.css";
import {classNames} from "shared/lib/classNames";
import {Link, type LinkProps} from "react-router";
import {memo} from "react";

export enum RouterLinkVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface Props extends LinkProps {
    className?: string;
    variant?: RouterLinkVariant;
    withoutUnderline?: boolean;
}

export const RouterLink = memo(function RouterLink(
    {
        children,
        className = '',
        variant = RouterLinkVariant.PRIMARY,
        withoutUnderline,
        ...props
    }: Props) {

    return (
        <Link
            className={classNames(
                styles.RouterLink,
                {
                    [styles.withoutUnderline]: withoutUnderline
                },
                [className, styles[variant]])}
            {...props}
        >
            {children}
        </Link>
    );
});