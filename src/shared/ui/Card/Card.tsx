import {memo, PropsWithChildren} from "react";
import styles from './Card.module.css';
import {classNames} from "shared/lib/classNames";

interface Props {
    className?: string;
}

export const Card = memo(function Card({children, className}: PropsWithChildren<Props>) {
    return (
        <div className={classNames(styles.Card, {}, [className])}>
            {children}
        </div>
    );
});