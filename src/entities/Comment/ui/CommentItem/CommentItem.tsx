import styles from './CommentItem.module.css';
import {Text, TextVariant} from 'shared/ui/Text';
import {Avatar} from "shared/ui/Avatar";
import {Comment} from '../../model/types/comment';

interface Props {
    comment: Comment;
}

export const CommentItem = ({comment}: Props) => (
    <div className={styles.CommentItem}>
        <div className={styles.userInfo}>
            {
                comment.user.avatar && (
                    <Avatar src={comment.user.avatar} size={30}/>
                )
            }
            <Text variant={TextVariant.SECONDARY}>
                {comment.user.username}
            </Text>
        </div>

        <Text variant={TextVariant.SECONDARY}>
            {comment.text}
        </Text>
    </div>
);