import {memo, useEffect} from "react";
import {DynamicModuleLoader} from "shared/lib/components";
import {detailedArticleReducer} from "../../model/slice/detailedArticleSlice";
import {useAppDispatch} from "shared/lib/hooks";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {detailedArticleActions} from '../../model/slice/detailedArticleSlice';
import {useSelector} from "react-redux";
import {
    getDetailedArticleError
} from "../../model/selectors/getDetailedArticleError/getDetailedArticleError";
import {
    getDetailedArticleIsLoading
} from "../../model/selectors/getDetailedArticleIsLoading/getDetailedArticleIsLoading";
import styles from './DetailedArticle.module.css';
import {Text, TextAlign, TextVariant} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";
import {ArticleSkeleton} from "../ArticleSkeleton/ArticleSkeleton";

const reducers = {
    detailedArticle: detailedArticleReducer
};

interface Props {
    id: number;
}

export const DetailedArticle = memo(function DetailedArticle({id}: Props) {
    const {t} = useTranslation('detailedArticle');
    const dispatch = useAppDispatch();
    const error = useSelector(getDetailedArticleError);
    const isLoading = useSelector(getDetailedArticleIsLoading);

    useEffect(() => {
        dispatch(fetchArticleById(id));

        return () => {
            dispatch(detailedArticleActions.clearArticle());
        };
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className={styles.DetailedArticle}>
                <ArticleSkeleton/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.DetailedArticle, {}, [styles.error])}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                >
                    {t('Попробуйте обновить страницу')}
                </Text>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={styles.DetailedArticle}>
                DetailedArticle
            </div>
        </DynamicModuleLoader>
    );
});