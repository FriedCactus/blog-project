import {Select, type SelectOption} from "shared/ui/Select";
import {Currency} from "shared/const";
import {memo, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";

interface Props {
    disabled?: boolean;
    value?: string;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(function CurrencySelect({value, onChange, disabled}: Props) {
    const {t} = useTranslation('currency');

    const CurrencyList: SelectOption[] = useMemo(() => (
        [
            {
                value: Currency.RUB,
                text: t('Рубль'),
            },
            {
                value: Currency.USD,
                text: t('Доллар'),
            },
            {
                value: Currency.EUR,
                text: t('Евро'),
            },
        ]
    ), [t]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            disabled={disabled}
            label={t("Валюта")}
            placeholder={t("Выберите валюту")}
            value={value}
            onChange={onChangeHandler}
            options={CurrencyList}
        />
    );
});