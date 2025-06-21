import styles from "./PageError.module.css";
import {classNames} from "shared/lib/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {VStack} from "shared/ui/Stack";

export const PageError = () => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <VStack align="center" justify="center" gap="l" wMax className={classNames(styles.PageError)}>
            <p>{t('Что-то пошло не так')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </VStack>
    );
};