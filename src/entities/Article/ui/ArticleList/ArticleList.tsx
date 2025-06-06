import {Article} from "../../model/types/article";
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
    view?: 'small' | 'big';
    isLoading?: boolean;
    isError?: boolean;
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
        view = 'small',
        isLoading,
        isError
    } = props;

    const ArticleItem = useMemo(() => (
        view === 'small' ? ArticleItemSmall : ArticleItemBig
    ), [view]);

    if (isError) {
        return (
            <div className={styles.error}>
                <ArticleError/>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={classNames(styles.ArticleList, {}, [styles[view]])}>
                {view === 'small' && <SmallSkeleton/>}
                {view === 'big' && <BigSkeleton/>}
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