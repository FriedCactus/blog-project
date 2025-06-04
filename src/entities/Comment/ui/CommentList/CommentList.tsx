import styles from './CommentsList.module.css';
import {CommentItem} from "../CommentItem/CommentItem";
import {CommentSkeleton} from "../CommentSkeleton/CommentSkeleton";
import {Comment} from '../../model/types/comment';
import {Text} from 'shared/ui/Text';
import {useTranslation} from "react-i18next";

interface Props {
    isLoading?: boolean;
    comments: Comment[];
}

export const CommentList = (props: Props) => {
    const {
        isLoading,
        comments
    } = props;

    const {t} = useTranslation('comment');

    if (isLoading) {
        return (
            <div className={styles.CommentList}>
                <CommentSkeleton/>
                <CommentSkeleton/>
                <CommentSkeleton/>
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div className={styles.commentsNotFound}>
                <Text size="l">
                    {t('Комментарии не найдены')}
                </Text>
            </div>
        );
    }

    return (
        <div className={styles.CommentList}>
            {
                comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                    />
                ))
            }
        </div>
    );
};