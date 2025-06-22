import {Country} from "shared/const";
import {memo, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ListBox, ListItem} from "shared/ui/ListBox";

interface Props {
    disabled?: boolean;
    value?: string;
    onChange?: (value: Country) => void;
}

export const CountrySelect = memo(function CountrySelect({value, onChange, disabled}: Props) {
    const {t} = useTranslation("country");

    const countryList: ListItem[] = useMemo(() => (
        [
            {
                value: Country.Russia,
                content: t("Россия"),
            },
            {
                value: Country.Belarus,
                content: t("Беларусь"),
            },
            {
                value: Country.Kazakhstan,
                content: t("Казахстан"),
            },
            {
                value: Country.Ukraine,
                content: t("Украина"),
            },
        ]
    ), [t]);

    const selectHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            disabled={disabled}
            label={t("Страна")}
            placeholder={t("Выберите страну")}
            value={value}
            onSelect={selectHandler}
            items={countryList}
        />
    );
});