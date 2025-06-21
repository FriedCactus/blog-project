import {Select, SelectOption} from "shared/ui/Select";
import {Country} from "shared/const";
import {memo, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";

interface Props {
    disabled?: boolean;
    value?: string;
    onChange?: (value: Country) => void;
}

export const CountrySelect = memo(function CountrySelect({value, onChange, disabled}: Props) {
    const {t} = useTranslation("country");

    const countryList: SelectOption<Country>[] = useMemo(() => (
        [
            {
                value: Country.Russia,
                text: t("Россия"),
            },
            {
                value: Country.Belarus,
                text: t("Беларусь"),
            },
            {
                value: Country.Kazakhstan,
                text: t("Казахстан"),
            },
            {
                value: Country.Ukraine,
                text: t("Украина"),
            },
        ]
    ), [t]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            disabled={disabled}
            label={t("Страна")}
            placeholder={t("Выберите страну")}
            value={value}
            onChange={onChangeHandler}
            options={countryList}
        />
    );
});