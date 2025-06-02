import {memo} from "react";
import {DetailedArticle} from "entities/Article";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextVariant} from 'shared/ui/Text';
import styles from './DetailedArticlePage.module.css';

const DetailedArticlePage = memo(function ArticlesPage() {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation('detailedArticle');

    if (!id || isNaN(+id)) {
        return (
            <div className={styles.error}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Статья не найдена')}
                >
                    {t('Проверьте ссылку или попробуйте обновить страницу')}
                </Text>
            </div>
        );
    }

    return (
        <DetailedArticle id={+id}/>
    );
});

export default DetailedArticlePage;