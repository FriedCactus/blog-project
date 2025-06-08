import {Page} from "shared/ui/Page";
import {memo, PropsWithChildren, useRef} from "react";
import {useIntersection} from "shared/lib/hooks";

interface Props {
    className?: string;
    onPageEnd?: () => void;
}

export const PageWrapper = memo(function PageWrapper(props: PropsWithChildren<Props>) {
    const {className, onPageEnd, children} = props;
    const targetRef = useRef(null);

    useIntersection(targetRef, onPageEnd);

    return (
        <Page className={className}>
            {children}
            {onPageEnd && <div ref={targetRef}/>}
        </Page>
    );
});