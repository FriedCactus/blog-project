import {Currency} from "shared/const";
import {memo, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ListBox, ListItem} from "shared/ui/ListBox";

interface Props {
    disabled?: boolean;
    value?: string;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(function CurrencySelect({value, onChange, disabled}: Props) {
    const {t} = useTranslation('currency');

    const CurrencyList: ListItem[] = useMemo(() => (
        [
            {
                value: Currency.RUB,
                content: t('Рубль'),
            },
            {
                value: Currency.USD,
                content: t('Доллар'),
            },
            {
                value: Currency.EUR,
                content: t('Евро'),
            },
        ]
    ), [t]);

    const selectHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            disabled={disabled}
            label={t("Валюта")}
            placeholder={t("Выберите валюту")}
            value={value}
            onSelect={selectHandler}
            items={CurrencyList}
        />
    );
});