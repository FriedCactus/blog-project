import styles from "./Text.module.css";
import {classNames} from "shared/lib/classNames";
import {PropsWithChildren} from "react";

export enum TextVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error'
}

interface Props {
    title?: string;
    variant?: TextVariant;
}

export const Text = (props: PropsWithChildren<Props>) => {
    const {
        children,
        title,
        variant = TextVariant.PRIMARY
    } = props;

    return (
        <div className={styles.Text}>
            {title && <p className={classNames(styles.title, {}, [styles[variant]])}>{title}</p>}
            {children && <p className={classNames(styles.text, {}, [styles[variant]])}>{children}</p>}
        </div>
    );
};