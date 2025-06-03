import {Skeleton} from "shared/ui/Skeleton";
import styles from './CommentSkeleton.module.css';

export const CommentSkeleton = () => (
    <div className={styles.CommentSkeleton}>
        <div className={styles.userInfo}>
            <Skeleton borderRadius="50%" width={30} height={30}/>
            <Skeleton width="10%" height={20}/>
        </div>

        <Skeleton width="70%" height={50}/>
    </div>
);