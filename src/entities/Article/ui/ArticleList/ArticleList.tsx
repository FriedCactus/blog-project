import {Article, ArticleListView} from "../../model/types/article";
import {ArticleItemSmall} from "../ArticleItemSmall/ArticleItemSmall";
import {ArticleItemBig} from "../ArticleItemBig/ArticleItemBig";
import {HTMLAttributeAnchorTarget, useMemo} from "react";
import styles from './ArticleList.module.css';
import {classNames} from "shared/lib/classNames";
import {ArticleError} from "../ArticleError/ArticleError";
import {ArticleItemSmallSkeleton} from "../ArticleItemSmall/ArticleItemSmallSkeleton";
import {ArticleItemBigSkeleton} from "../ArticleItemBig/ArticleItemBigSkeleton";

interface Props {
    className?: string;
    articles: Article[];
    view?: ArticleListView;
    isLoading?: boolean;
    error?: string;
    target?: HTMLAttributeAnchorTarget;
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
        className,
        articles,
        view = ArticleListView.SMALL,
        isLoading,
        error,
        target
    } = props;

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
        <div className={classNames(styles.ArticleList, {}, [styles[view], className])}>
            {
                articles.map((article) => (
                    <ArticleItem key={article.id} article={article} target={target}/>
                ))
            }
            {isLoading && <ArticleItemSkeleton/>}
        </div>
    );
};