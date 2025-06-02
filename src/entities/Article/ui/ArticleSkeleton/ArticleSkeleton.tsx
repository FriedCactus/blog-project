import {Skeleton} from "shared/ui/Skeleton";
import styles from './ArticleSkeleton.module.css';

export const ArticleSkeleton = () => {
    return (
        <div className={styles.ArticleSkeleton}>
            <Skeleton
                className={styles.circleSkeleton}
                width={200}
                height={200}
                borderRadius="50%"
            />

            <div className={styles.titleSkeleton}>
                <Skeleton width="50%" height={40}/>
                <Skeleton width="30%" height={32}/>
            </div>

            <div className={styles.contentSkeleton}>
                <Skeleton/>
                <Skeleton/>
            </div>
        </div>
    );
};