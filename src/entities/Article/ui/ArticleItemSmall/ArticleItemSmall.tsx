import {Article} from "../../model/types/article";
import styles from './ArticleItemSmall.module.css';
import {Card} from "shared/ui/Card";
import {Text, TextVariant} from "shared/ui/Text";
import {Icon} from "shared/ui/Icon";
import {RouterLink} from "shared/ui/RouterLink";
import {memo} from "react";

interface Props {
    article: Article;
}

export const ArticleItemSmall = memo(function ArticleItemSmall({article}: Props) {
    const {id, views, type, title, createdAt, img} = article;

    return (
        <RouterLink className={styles.routerLink} to={`/articles/${id}`}>
            <Card className={styles.ArticleItemSmall}>
                <div className={styles.imageContainer}>
                    <Text
                        className={styles.date}
                        variant={TextVariant.SECONDARY}
                    >
                        {createdAt}
                    </Text>
                    <img className={styles.image} src={img} alt={title}/>
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <Text className={styles.articleTypes}>
                            {type.join(', ')}
                        </Text>

                        <span className={styles.views}>
                            <Text>{views}</Text>
                            <Icon name="eye" variant="tertiary"/>
                        </span>
                    </div>

                    <Text className={styles.title}>
                        {title}
                    </Text>
                </div>
            </Card>
        </RouterLink>

    );
});