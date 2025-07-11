import {Article, ArticleListView} from "../../model/types/article";
import {ArticleItemSmall} from "../ArticleItemSmall/ArticleItemSmall";
import {ArticleItemBig} from "../ArticleItemBig/ArticleItemBig";
import {HTMLAttributeAnchorTarget, RefObject, useMemo} from "react";
import styles from './ArticleList.module.css';
import {classNames} from "shared/lib/classNames";
import {ArticleError} from "../ArticleError/ArticleError";
import {ArticleItemSmallSkeleton} from "../ArticleItemSmall/ArticleItemSmallSkeleton";
import {ArticleItemBigSkeleton} from "../ArticleItemBig/ArticleItemBigSkeleton";
import {VirtuosoGrid} from 'react-virtuoso';
import {HStack} from "shared/ui/Stack";

interface Props {
    scrollerRef?: RefObject<HTMLElement | null>,
    className?: string;
    articles: Article[];
    view?: ArticleListView;
    isLoading?: boolean;
    error?: string;
    target?: HTMLAttributeAnchorTarget;
    onPageEnd?: () => void;
}

const SmallSkeleton = () => (
    Array(12).fill(null).map((_, index) => (
        <ArticleItemSmallSkeleton key={index}/>
    ))
);

const BigSkeleton = () => (
    Array(3).fill(null).map((_, index) => (
        <ArticleItemBigSkeleton key={index}/>
    ))
);

export const ArticleList = (props: Props) => {
    const {
        scrollerRef,
        className,
        articles,
        view = ArticleListView.SMALL,
        isLoading,
        error,
        target,
        onPageEnd
    } = props;

    const listClassName = classNames(styles.virtuosoList, {}, [styles[view]]);

    const ArticleItem = useMemo(() => (
        view === ArticleListView.SMALL ? ArticleItemSmall : ArticleItemBig
    ), [view]);

    const ArticleItemSkeleton = useMemo(() => (
        view === ArticleListView.SMALL ? SmallSkeleton : BigSkeleton
    ), [view]);

    if (error) {
        return (
            <HStack hMax justify="center" align="center">
                <ArticleError/>
            </HStack>
        );
    }

    return (
        <div className={className}>
            {
                <VirtuosoGrid
                    useWindowScroll
                    listClassName={listClassName}
                    customScrollParent={scrollerRef?.current ?? undefined}
                    data={articles}
                    itemContent={(_, article) => (
                        <ArticleItem article={article} target={target}/>
                    )}
                    endReached={onPageEnd}
                />
            }
            {isLoading && (
                <div className={listClassName}>
                    <ArticleItemSkeleton/>
                </div>
            )}
        </div>
    );
};