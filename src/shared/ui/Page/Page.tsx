import {PropsWithChildren} from "react";
import styles from './Page.module.css';
import {classNames} from "shared/lib/classNames";

interface Props {
    className?: string;
}

export const Page = ({children, className}: PropsWithChildren<Props>) => (
    <section className={classNames(styles.Page, {}, [className])}>
        {children}
    </section>
);