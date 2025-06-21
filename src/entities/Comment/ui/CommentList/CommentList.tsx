import {CommentItem} from "../CommentItem/CommentItem";
import {CommentSkeleton} from "../CommentSkeleton/CommentSkeleton";
import {Comment} from '../../model/types/comment';
import {Text} from 'shared/ui/Text';
import {useTranslation} from "react-i18next";
import {HStack, VStack} from "shared/ui/Stack";

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
            <VStack gap="m">
                {
                    Array(3).fill(null).map((_, index) => (
                        <CommentSkeleton key={index}/>
                    ))
                }
            </VStack>
        );
    }

    if (comments.length === 0) {
        return (
            <HStack justify="center">
                <Text size="l">
                    {t('Комментарии не найдены')}
                </Text>
            </HStack>
        );
    }

    return (
        <VStack gap="m">
            {
                comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                    />
                ))
            }
        </VStack>
    );
};