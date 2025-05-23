import {Button, ButtonVariant} from "shared/ui/Button";
import {useTranslation} from "react-i18next";

interface Props {
    short?: boolean;
}

export const LangSwitcher = ({short = false}: Props) => {
    const {i18n, t} = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return <Button
        onClick={onToggle}
        variant={ButtonVariant.CLEAR}
    >
        {t(short ? 'Короткое переключение языка' : 'Переключение языка')}
    </Button>;
};