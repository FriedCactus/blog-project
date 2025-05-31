import {Skeleton} from "shared/ui/Skeleton";
import styles from './ArticleSkeleton.module.css';

export const ArticleSkeleton = () => {
    return (
        <div className={styles.ArticleSkeleton}>
            <Skeleton
                className={styles.circleSkeleton}
                width="200px"
                height="200px"
                borderRadius="50%"
            />

            <div className={styles.titleSkeleton}>
                <Skeleton width="50%" height="30px"/>
                <Skeleton width="30%" height="30px"/>
            </div>

            <div className={styles.contentSkeleton}>
                <Skeleton/>
                <Skeleton/>
            </div>
        </div>
    );
};