import styles from './ArticleRecommendationsList.module.css';
import {memo} from 'react';
import {Text} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {ArticleList} from "entities/Article";
import {VStack} from "shared/ui/Stack";
import {
    useGetArticleRecommendationsListQuery
} from "../model/api/articleRecommendationsApi";

const LIMIT = 4;

export const ArticleRecommendationsList = memo(function ArticleRecommendationsList() {
    const {t} = useTranslation('articles');

    const {
        data: articleRecommendations,
        isLoading,
        error
    } = useGetArticleRecommendationsListQuery(LIMIT);

    return (
        <VStack gap="l">
            <Text title={t('Рекомендуем')}/>
            <ArticleList
                className={styles.ArticleRecommendationsList}
                articles={articleRecommendations ?? []}
                isLoading={isLoading}
                error={error && t('Ошибка при получении рекомендуемых статей')}
                target="_blank"
            />
        </VStack>
    );
});