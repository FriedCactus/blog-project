import {Page} from "shared/ui/Page";
import {memo, PropsWithChildren, UIEvent, useRef} from "react";
import {useAppDispatch, useInitialEffect, useIntersection, useThrottle} from "shared/lib/hooks";
import {getScrollByPath, scrollRestorationActions} from "features/ScrollRestoration";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider";
import styles from './PageWrapper.module.css';

interface Props {
    className?: string;
    onPageEnd?: () => void;
    saveScrollPosition?: boolean;
}

export const PageWrapper = memo(function PageWrapper(props: PropsWithChildren<Props>) {
    const {
        className,
        onPageEnd,
        saveScrollPosition = false,
        children
    } = props;

    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, pathname)
    );

    const targetRef = useRef(null);
    const pageRef = useRef<HTMLElement>(null);

    useIntersection(targetRef, onPageEnd);

    useInitialEffect(() => {
        if (saveScrollPosition && pageRef.current) {
            pageRef.current.scrollTop = scrollPosition;
        }
    });

    const onScroll = (e: UIEvent<HTMLElement>) => {
        if (!saveScrollPosition) return;

        const position = e.currentTarget.scrollTop;
        dispatch(scrollRestorationActions.setScrollPosition({
            position,
            path: pathname
        }));
    };

    const throttleCallback = useThrottle(onScroll, 500);

    return (
        <Page ref={pageRef} className={className} onScroll={throttleCallback}>
            {children}

            <div className={styles.intersectionContainer}>
                {onPageEnd && <div ref={targetRef} className={styles.intersection}/>}
            </div>
        </Page>
    );
});