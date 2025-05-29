import styles from "./Text.module.css";
import {classNames} from "shared/lib/classNames";
import {memo, PropsWithChildren} from "react";

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error'
}

interface Props {
    title?: string;
    variant?: TextVariant;
    textAlign?: TextAlign;
    className?: string;
}

export const Text = memo(function Text(props: PropsWithChildren<Props>) {
    const {
        children,
        title,
        variant = TextVariant.PRIMARY,
        textAlign = TextAlign.LEFT,
        className
    } = props;

    return (
        <div className={classNames(styles.Text, {}, [className, styles[textAlign]])}>
            {title && <p className={classNames(styles.title, {}, [styles[variant]])}>{title}</p>}
            {children && <p className={classNames(styles.text, {}, [styles[variant]])}>{children}</p>}
        </div>
    );
});