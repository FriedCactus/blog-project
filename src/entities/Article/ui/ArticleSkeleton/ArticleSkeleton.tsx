import {Skeleton} from "shared/ui/Skeleton";
import styles from './ArticleSkeleton.module.css';
import {VStack} from "shared/ui/Stack";

export const ArticleSkeleton = () => {
    return (
        <VStack hMax gap="xl" className={styles.ArticleSkeleton}>
            <Skeleton
                className={styles.circleSkeleton}
                width={200}
                height={200}
                borderRadius="50%"
            />

            <VStack gap="s">
                <Skeleton width="50%" height={40}/>
                <Skeleton width="30%" height={32}/>
            </VStack>

            <VStack gap="xl" className={styles.contentSkeleton}>
                <Skeleton/>
                <Skeleton/>
            </VStack>
        </VStack>
    );
};