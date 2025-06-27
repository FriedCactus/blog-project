import {memo} from "react";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextVariant} from 'shared/ui/Text';
import styles from './DetailedArticlePage.module.css';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components";
import {detailedArticleCommentsReducer,} from "../model/slice/detailedArticleComments/detailedArticleComments";
import {DetailedArticle} from "entities/Article";
import {Page} from "shared/ui/Page";
import {DetailedArticleHeader} from "./DetailedArticleHeader/DetailedArticleHeader";
import {VStack} from "shared/ui/Stack";
import {ArticleRecommendationsList} from "features/ArticleRecommendationsList";
import {DetailedArticleComments} from "./DetailedArticleComments/DetailedArticleComments";

const reducers: ReducersList = {
    detailedArticleComments: detailedArticleCommentsReducer
};

const DetailedArticlePage = memo(function ArticlesPage() {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation('detailedArticle');

    if (!id || isNaN(+id)) {
        return (
            <Page className={styles.error}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Статья не найдена')}
                >
                    {t('Проверьте ссылку или попробуйте обновить страницу')}
                </Text>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={styles.DetailedArticlePage}>
                <DetailedArticleHeader id={id}/>

                <VStack gap="xl">
                    <DetailedArticle id={+id}/>
                    <ArticleRecommendationsList/>
                    <DetailedArticleComments/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default DetailedArticlePage;