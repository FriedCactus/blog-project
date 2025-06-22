import {memo, PropsWithChildren, Ref, UIEvent} from "react";
import styles from './Page.module.css';
import {classNames} from "shared/lib/classNames";

interface Props {
    ref?: Ref<HTMLElement>,
    className?: string;
    onScroll?: (e: UIEvent<HTMLElement>) => void;
}

export const Page = memo(function Page(props: PropsWithChildren<Props>) {
    const {ref, children, className, onScroll} = props;

    return (
        <main
            ref={ref}
            onScroll={onScroll}
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
        </main>
    );
});