import {memo} from "react";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextVariant} from 'shared/ui/Text';
import styles from './DetailedArticlePage.module.css';
import {CommentList} from "entities/Comment";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {
    fetchCommentsByArticleId
} from "../model/services/detailedArticleComments/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {DynamicModuleLoader} from "shared/lib/components";
import {getDetailedArticleComments} from "../model/slice/detailedArticleComments/detailedArticleComments";
import {useSelector} from "react-redux";
import {ArticleList, DetailedArticle} from "entities/Article";
import {
    getDetailedArticleCommentsIsLoading
} from "../model/selectors/detailedArticleComments/getDetailedArticleCommentsIsLoading/getDetailedArticleCommentsIsLoading";
import {AddCommentForm} from "features/AddCommentForm";
import {
    addArticleComment
} from "../model/services/detailedArticleComments/addArticleComment/addArticleComment";
import {
    getCommentSendingError
} from "../model/selectors/detailedArticleComments/getCommentSendingError/getCommentSendingError";
import {Button, ButtonVariant} from "shared/ui/Button";
import {RouterLink} from "shared/ui/RouterLink";
import {AppPaths} from "shared/config/routes";
import {Page} from "shared/ui/Page";
import {detailedArticlePageReducer} from "../model/slice/detailedArticlePageSlice";
import {
    fetchArticleRecommendations
} from "../model/services/detailedArticleRecommendations/fetchArticleRecommendations/fetchArticleRecommendations";
import {
    getDetailedArticleRecommendations
} from "../model/slice/detailedArticleRecommendations/detailedArticleRecommendations";
import {
    getDetailedArticleRecommendationsIsLoading
} from "../model/selectors/detailedArticleRecommendations/getDetailedArticleRecommendationsIsLoading/getDetailedArticleRecommendationsIsLoading";
import {
    getDetailedArticleRecommendationsError
} from "../model/selectors/detailedArticleRecommendations/getDetailedArticleRecommendationsError/getDetailedArticleRecommendationsError";

const reducers = {
    detailedArticlePage: detailedArticlePageReducer
};

const DetailedArticlePage = memo(function ArticlesPage() {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation('detailedArticle');
    const commentSendingError = useSelector(getCommentSendingError);

    const dispatch = useAppDispatch();
    const articleComments = useSelector(getDetailedArticleComments.selectAll);
    const isLoading = useSelector(getDetailedArticleCommentsIsLoading);

    const recommendationArticles = useSelector(getDetailedArticleRecommendations.selectAll);
    const isRecommendationsLoading = useSelector(getDetailedArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getDetailedArticleRecommendationsError);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecommendations());
        }
    }, [id]);

    const onSubmit = async (commentText: string) => {
        return dispatch(addArticleComment(commentText));
    };

    if (!id || isNaN(+id)) {
        return (
            <Page className={styles.error}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Статья не найдена')}
                >
                    {t('Проверьте ссылку или попробуйте обновить страницу')}
                </Text>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={styles.DetailedArticlePage}>
                <RouterLink to={AppPaths.ARTICLES} withoutUnderline>
                    <Button variant={ButtonVariant.OUTLINE}>
                        {t('К статьям')}
                    </Button>
                </RouterLink>

                <div className={styles.articleContainer}>
                    <DetailedArticle id={+id}/>

                    <div className={styles.blockContainer}>
                        <Text title={t('Рекомендуем')}/>
                        <ArticleList
                            className={styles.recommendations}
                            articles={recommendationArticles}
                            isLoading={isRecommendationsLoading}
                            error={recommendationsError && t('Ошибка при получении рекомендуемых статей')}
                            target="_blank"
                        />
                    </div>

                    <div className={styles.blockContainer}>
                        <Text title={t('Комментарии')}/>

                        <AddCommentForm
                            onSubmit={onSubmit}
                            error={commentSendingError && t("Ошибка добавления комментария к статье")}
                        />
                        <CommentList
                            isLoading={isLoading}
                            comments={articleComments}
                        />
                    </div>
                </div>
            </Page>
        </DynamicModuleLoader>
    );
});

export default DetailedArticlePage;