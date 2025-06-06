import {Skeleton} from "shared/ui/Skeleton";
import {Card} from "shared/ui/Card";
import styles from './ArticleItemBig.module.css';

export const ArticleItemBigSkeleton = () => (
    <Card className={styles.card}>
        <div className={styles.topPart}>
            <div className={styles.info}>
                <div className={styles.user}>
                    <Skeleton height={40} width={40} borderRadius="50%"/>
                    <Skeleton height={15} width={150}/>
                </div>
                <Skeleton height={15} width={150}/>
            </div>

            <Skeleton height={25} width="50%"/>

            <div className={styles.types}>
                <Skeleton height={15} width={50}/>
                <Skeleton height={15} width={50}/>
            </div>
        </div>

        <Skeleton height={180}/>

        <div className={styles.bottomPart}>
            <Skeleton height={55}/>

            <Skeleton height={55}/>

            <div className={styles.linksContainer}>
                <Skeleton height={30} width={100}/>
            </div>
        </div>
    </Card>
);