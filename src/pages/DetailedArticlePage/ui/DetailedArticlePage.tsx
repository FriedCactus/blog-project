import {memo} from "react";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextVariant} from 'shared/ui/Text';
import styles from './DetailedArticlePage.module.css';
import {CommentList} from "entities/Comment";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {fetchCommentsByArticleId} from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {DynamicModuleLoader} from "shared/lib/components";
import {detailedArticleCommentsReducer, getDetailedArticleComments} from "../model/slice/detailedArticleComments";
import {useSelector} from "react-redux";
import {DetailedArticle} from "entities/Article";
import {
    getDetailedArticleCommentsIsLoading
} from "../model/selectors/getDetailedArticleCommentsIsLoading/getDetailedArticleCommentsIsLoading";
import {AddCommentForm} from "features/AddCommentForm";
import {addArticleComment} from "../model/services/addArticleComment/addArticleComment";
import {getCommentSendingError} from "../model/selectors/getCommentSendingError/getCommentSendingError";
import {Button, ButtonVariant} from "shared/ui/Button";
import {RouterLink} from "shared/ui/RouterLink";
import {AppPaths} from "shared/config/routes";

const reducers = {
    detailedArticleComments: detailedArticleCommentsReducer
};

const DetailedArticlePage = memo(function ArticlesPage() {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation('detailedArticle');
    const commentSendingError = useSelector(getCommentSendingError);

    const dispatch = useAppDispatch();
    const articleComments = useSelector(getDetailedArticleComments.selectAll);
    const isLoading = useSelector(getDetailedArticleCommentsIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    const onSubmit = async (commentText: string) => {
        return dispatch(addArticleComment(commentText));
    };

    if (!id || isNaN(+id)) {
        return (
            <div className={styles.error}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Статья не найдена')}
                >
                    {t('Проверьте ссылку или попробуйте обновить страницу')}
                </Text>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={styles.DetailedArticlePage}>
                <RouterLink to={AppPaths.ARTICLES} withoutUnderline>
                    <Button variant={ButtonVariant.OUTLINE}>
                        {t('К статьям')}
                    </Button>
                </RouterLink>

                <div className={styles.articleContainer}>
                    <DetailedArticle id={+id}/>
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
        </DynamicModuleLoader>
    );
});

export default DetailedArticlePage;