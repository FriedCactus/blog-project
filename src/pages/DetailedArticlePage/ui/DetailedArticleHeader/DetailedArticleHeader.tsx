import {memo} from "react";
import {useSelector} from "react-redux";
import {RouterLink} from "shared/ui/RouterLink";
import {AppPaths} from "shared/config/routes";
import {Button, ButtonVariant} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {getCanEditArticle} from "../../model/selectors/getCanEditArticle/getCanEditArticle";
import styles from './DetailedArticleHeader.module.css';

interface Props {
    id: string;
}

export const DetailedArticleHeader = memo(function DetailedArticleHeader({id}: Props) {
    const {t} = useTranslation('detailedArticle');

    const canEdit = useSelector(getCanEditArticle);

    return (
        <div className={styles.DetailedArticleHeader}>
            <RouterLink to={AppPaths.ARTICLES} withoutUnderline>
                <Button variant={ButtonVariant.OUTLINE}>
                    {t('К статьям')}
                </Button>
            </RouterLink>

            {
                canEdit && (
                    <RouterLink to={`${AppPaths.ARTICLES}/${id}/edit`} withoutUnderline>
                        <Button>
                            {t('Редактировать статью')}
                        </Button>
                    </RouterLink>
                )
            }
        </div>
    );
});