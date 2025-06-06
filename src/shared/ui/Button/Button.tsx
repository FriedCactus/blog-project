import styles from "./Button.module.css";
import {classNames} from "shared/lib/classNames";
import {ButtonHTMLAttributes, memo, PropsWithChildren} from "react";

export enum ButtonVariant {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    withPaddings?: boolean;
}

export const Button = memo(function Button(
    {
        children,
        variant = ButtonVariant.PRIMARY,
        className = '',
        square = false,
        size = ButtonSize.M,
        withPaddings = true,
        ...props
    }: PropsWithChildren<ButtonProps>) {
    return (
        <button
            className={classNames(
                styles.Button,
                {
                    [styles.square]: square,
                    [styles.paddings]: withPaddings
                },
                [styles[variant], styles[size], className])}
            {...props}>
            {children}
        </button>
    );
});