import styles from "./NotFoundPage.module.css";
import {classNames} from "shared/lib/classNames";
import {useTranslation} from "react-i18next";
import {Page} from "shared/ui/Page";

export const NotFoundPage = () => {
    const {t} = useTranslation('notFound');

    return (
        <Page className={classNames(styles.NotFoundPage)}>
            {t('Страница не найдена')}
        </Page>
    );
};