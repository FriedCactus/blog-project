import styles from './ArticleRecommendationsList.module.css';
import {memo} from 'react';
import {Text} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {ArticleList} from "entities/Article";
import {useSelector} from "react-redux";
import {
    articleRecommendationsListReducer,
    getArticleRecommendations
} from "../model/slice/articleRecommendationsListSlice";
import {VStack} from "shared/ui/Stack";
import {
    getArticleRecommendationsListIsLoading
} from "../model/selectors/getArticleRecommendationsListIsLoading/getArticleRecommendationsListIsLoading";
import {
    getArticleRecommendationsListError
} from "../model/selectors/getArticleRecommendationsListError/getArticleRecommendationsListError";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {
    fetchArticleRecommendations
} from "../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components";

const reducers: ReducersList = {
    articleRecommendationsList: articleRecommendationsListReducer
};

export const ArticleRecommendationsList = memo(function ArticleRecommendationsList() {
    const {t} = useTranslation('articles');

    const dispatch = useAppDispatch();

    const articleRecommendations = useSelector(getArticleRecommendations.selectAll);
    const isRecommendationsLoading = useSelector(getArticleRecommendationsListIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsListError);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="l">
                <Text title={t('Рекомендуем')}/>
                <ArticleList
                    className={styles.ArticleRecommendationsList}
                    articles={articleRecommendations}
                    isLoading={isRecommendationsLoading}
                    error={recommendationsError && t('Ошибка при получении рекомендуемых статей')}
                    target="_blank"
                />
            </VStack>
        </DynamicModuleLoader>
    );
});