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

type TextSize = 's' | 'm' | 'l';

interface Props {
    title?: string;
    variant?: TextVariant;
    textAlign?: TextAlign;
    size?: TextSize;
    className?: string;
}

export const Text = memo(function Text(props: PropsWithChildren<Props>) {
    const {
        children,
        title,
        variant = TextVariant.PRIMARY,
        textAlign = TextAlign.LEFT,
        size = 'm',
        className
    } = props;

    return (
        <div className={classNames(styles.Text, {}, [className, styles[textAlign], styles[size]])}>
            {title && <p className={classNames(styles.title, {}, [styles[variant], styles[size]])}>{title}</p>}
            {children && <p className={classNames(styles.text, {}, [styles[variant], styles[size]])}>{children}</p>}
        </div>
    );
});