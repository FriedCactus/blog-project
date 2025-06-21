import {Skeleton} from "shared/ui/Skeleton";
import styles from './CommentSkeleton.module.css';
import {HStack, VStack} from "shared/ui/Stack";

export const CommentSkeleton = () => (
    <VStack gap="m" className={styles.CommentSkeleton}>
        <HStack align="center" gap="m">
            <Skeleton borderRadius="50%" width={30} height={30}/>
            <Skeleton width="10%" height={20}/>
        </HStack>

        <Skeleton width="70%" height={50}/>
    </VStack>
);