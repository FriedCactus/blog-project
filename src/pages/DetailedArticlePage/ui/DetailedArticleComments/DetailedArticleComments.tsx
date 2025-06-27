import {VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text";
import {AddCommentForm} from "features/AddCommentForm";
import {CommentList} from "entities/Comment";
import {useTranslation} from "react-i18next";
import {addArticleComment} from "../../model/services/addArticleComment/addArticleComment";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {useSelector} from "react-redux";
import {
    getCommentSendingError
} from "../../model/selectors/detailedArticleComments/getCommentSendingError/getCommentSendingError";
import {
    getDetailedArticleCommentsIsLoading
} from "../../model/selectors/detailedArticleComments/getDetailedArticleCommentsIsLoading/getDetailedArticleCommentsIsLoading";
import {
    getDetailedArticleComments
} from "../../model/slice/detailedArticleComments/detailedArticleComments";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {useParams} from "react-router";

export const DetailedArticleComments = () => {
    const {t} = useTranslation('detailedArticle');
    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const articleComments = useSelector(getDetailedArticleComments.selectAll);
    const commentSendingError = useSelector(getCommentSendingError);
    const isLoading = useSelector(getDetailedArticleCommentsIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    }, [id]);

    const onSubmit = async (commentText: string) => {
        return dispatch(addArticleComment(commentText));
    };

    return (
        <VStack gap="l">
            <Text title={t('Комментарии')}/>
            <AddCommentForm
                onSubmit={onSubmit}
                error={commentSendingError && t("Ошибка добавления комментария к статье")}
            />
            <CommentList
                isLoading={isLoading}
                comments={articleComments}
            />
        </VStack>
    );
};