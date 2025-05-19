import styles from "./NotFoundPage.module.css";
import {classNames} from "shared/lib/classNames";
import {useTranslation} from "react-i18next";

export const NotFoundPage = () => {
    const {t} = useTranslation('notFound');

    return (
        <div className={classNames(styles.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};