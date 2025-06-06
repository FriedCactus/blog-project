import {Article, ArticleListView} from "../../model/types/article";
import {ArticleItemSmall} from "../ArticleItemSmall/ArticleItemSmall";
import {ArticleItemBig} from "../ArticleItemBig/ArticleItemBig";
import {useMemo} from "react";
import styles from './ArticleList.module.css';
import {classNames} from "shared/lib/classNames";
import {ArticleError} from "../ArticleError/ArticleError";
import {ArticleItemSmallSkeleton} from "../ArticleItemSmall/ArticleItemSmallSkeleton";
import {ArticleItemBigSkeleton} from "../ArticleItemBig/ArticleItemBigSkeleton";

interface Props {
    articles: Article[];
    view?: ArticleListView;
    isLoading?: boolean;
    error?: string;
}

const SmallSkeleton = () => (
    Array(9).fill(null).map((_, index) => (
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
        articles,
        view = ArticleListView.SMALL,
        isLoading,
        error
    } = props;

    const ArticleItem = useMemo(() => (
        view === ArticleListView.SMALL ? ArticleItemSmall : ArticleItemBig
    ), [view]);

    if (error) {
        return (
            <div className={styles.error}>
                <ArticleError/>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={classNames(styles.ArticleList, {}, [styles[view]])}>
                {view === ArticleListView.SMALL && <SmallSkeleton/>}
                {view === ArticleListView.BIG && <BigSkeleton/>}
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleList, {}, [styles[view]])}>
            {
                articles.map((article) => (
                    <ArticleItem key={article.id} article={article}/>
                ))
            }
        </div>
    );
};