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
            <div className={styles.error}>
                <ArticleError/>
            </div>
        );
    }

    return (
        <div className={className}>
            {
                <VirtuosoGrid
                    useWindowScroll
                    listClassName={listClassName}
                    customScrollParent={scrollerRef?.current ?? undefined}
                    totalCount={articles.length}
                    itemContent={(index) => (
                        <ArticleItem article={articles[index]} target={target}/>
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