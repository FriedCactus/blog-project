import styles from "./Button.module.css";
import {classNames} from "shared/lib/classNames";
import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";

export enum ButtonVariant {
    MAIN = 'main',
    SECONDARY = 'secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<PropsWithChildren<ButtonProps>> =
    ({
         children,
         variant = ButtonVariant.MAIN,
         className,
         ...props
     }) => {
        return (
            <button
                className={classNames(
                    styles.Button,
                    {},
                    [styles[variant], className])}
                {...props}>
                {children}
            </button>
        );
    };