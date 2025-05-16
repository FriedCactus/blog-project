import styles from "./Button.module.css";
import {classNames} from "shared/lib/classNames";
import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";

enum ButtonVariant {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<PropsWithChildren<ButtonProps>> =
    ({
         children,
         variant = ButtonVariant.CLEAR,
         className,
         ...props
     }) => {
        return (
            <button className={classNames(styles.Button, {}, [styles[variant], className])} {...props} >
                {children}
            </button>
        );
    };