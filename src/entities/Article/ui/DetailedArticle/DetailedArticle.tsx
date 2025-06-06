import {memo} from "react";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useSelector} from "react-redux";
import {
    getDetailedArticleError
} from "../../model/selectors/getDetailedArticleError/getDetailedArticleError";
import {
    getDetailedArticleIsLoading
} from "../../model/selectors/getDetailedArticleIsLoading/getDetailedArticleIsLoading";
import styles from './DetailedArticle.module.css';
import {ArticleSkeleton} from "../ArticleSkeleton/ArticleSkeleton";
import {DetailedArticleError} from "../DetailedArticleError/DetailedArticleError";
import {ArticleBlockComponent} from "entities/Article/ui/ArticleBlockComponent/ArticleBlockComponent";
import {Avatar} from "shared/ui/Avatar";
import {getDetailedArticleData} from "../../model/selectors/getDetailedArticleData/getDetailedArticleData";
import {Text} from "shared/ui/Text";
import {ArticleWrapper} from "../ArticleWrapper/ArticleWrapper";
import {Icon} from 'shared/ui/Icon';

interface Props {
    id: number;
}

export const DetailedArticle = memo(function DetailedArticle({id}: Props) {
    const dispatch = useAppDispatch();
    const error = useSelector(getDetailedArticleError);
    const isLoading = useSelector(getDetailedArticleIsLoading);
    const articleData = useSelector(getDetailedArticleData);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    if (isLoading) {
        return (
            <ArticleWrapper>
                <ArticleSkeleton/>
            </ArticleWrapper>
        );
    }

    if (error || !articleData) {
        return (
            <ArticleWrapper>
                <DetailedArticleError/>
            </ArticleWrapper>
        );
    }

    return (
        <ArticleWrapper>
            {
                articleData.img && (
                    <Avatar
                        className={styles.avatar}
                        size={200}
                        src={articleData.img}
                        alt={articleData.title}
                    />
                )
            }

            <div className={styles.titleContainer}>
                <Text title={articleData.title} size="l">
                    {articleData.subtitle}
                </Text>

                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <Icon name="eye"/>
                        <Text>{articleData.views}</Text>
                    </div>
                    <div className={styles.info}>
                        <Icon name="calendar"/>
                        <Text>{articleData.createdAt}</Text>
                    </div>
                </div>
            </div>


            <div className={styles.blocks}>
                {
                    articleData.blocks.map(block => (
                        <ArticleBlockComponent key={block.id} block={block}/>
                    ))
                }
            </div>
        </ArticleWrapper>
    );
});