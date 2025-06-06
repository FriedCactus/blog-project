import {Text, TextAlign, TextVariant} from "shared/ui/Text";
import {useTranslation} from "react-i18next";

export const ArticleError = () => {
    const {t} = useTranslation();

    return (
        <Text
            title={t('Произошла ошибка при загрузке статей')}
            variant={TextVariant.ERROR}
            textAlign={TextAlign.CENTER}
        >
            {t('Попробуйте обновить страницу')}
        </Text>
    );
};