import {Text, TextAlign, TextVariant} from "shared/ui/Text";
import {useTranslation} from "react-i18next";

export const ArticleError = () => {
    const {t} = useTranslation('detailedArticle');

    return (
        <Text
            variant={TextVariant.ERROR}
            textAlign={TextAlign.CENTER}
            title={t('Произошла ошибка при загрузке статьи')}
        >
            {t('Проверьте ссылку или попробуйте обновить страницу')}
        </Text>
    );
};