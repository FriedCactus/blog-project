import {Text, TextAlign, TextVariant} from "shared/ui/Text";

export const ArticleError = () => {
    return (
        <Text
            title="Произошла ошибка при загрузке статей"
            variant={TextVariant.ERROR}
            textAlign={TextAlign.CENTER}
        >
            Попробуйте обновить страницу
        </Text>
    );
};