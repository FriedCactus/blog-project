import {Article, ArticleBlockType} from "../../model/types/article";
import {Card} from "shared/ui/Card";
import {Text} from 'shared/ui/Text';
import {Avatar} from "shared/ui/Avatar";
import styles from './ArticleItemBig.module.css';
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {Button, ButtonVariant} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";
import {RouterLink} from "shared/ui/RouterLink";
import {useTranslation} from "react-i18next";
import {memo} from "react";


interface Props {
    article: Article;
}

export const ArticleItemBig = memo(function ArticleItemBig({article}: Props) {
    const {id, user, title, type, img, blocks, createdAt, views} = article;

    const {t} = useTranslation('');
    const firstParagraph = blocks.find(block => block.type === ArticleBlockType.TEXT);

    return (
        <Card className={styles.card}>
            <div className={styles.topPart}>
                <div className={styles.info}>
                    <div className={styles.user}>
                        {
                            user.avatar && <Avatar size={40} src={user.avatar}/>
                        }
                        <Text>{user.username}</Text>
                    </div>
                    <Text>{createdAt}</Text>
                </div>

                <Text title={title}/>

                <div className={styles.types}>
                    {
                        type.map(item => (
                            <Text key={item}>{item}</Text>
                        ))
                    }
                </div>
            </div>

            <img className={styles.imageContainer} src={img} alt={title}/>

            <div className={styles.bottomPart}>
                {
                    firstParagraph && <ArticleTextBlockComponent block={firstParagraph}/>
                }

                <div className={styles.linksContainer}>
                    <RouterLink to={`/articles/${id}`} withoutUnderline>
                        <Button variant={ButtonVariant.OUTLINE}>
                            {t('Читать далее')}
                        </Button>
                    </RouterLink>

                    <span className={styles.views}>
                        <Text>{views}</Text>
                        <Icon name="eye" variant="tertiary"/>
                    </span>
                </div>
            </div>
        </Card>
    );
});