import styles from "./ProfileCard.module.css";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input";
import {Profile, ValidateProfileError} from "../../model/types/profile";
import {LoadingSpinner} from "shared/ui/LoadingSpinner";
import {classNames} from "shared/lib/classNames";
import {Text, TextAlign, TextVariant} from 'shared/ui/Text';
import {memo, useMemo} from "react";
import {Avatar} from 'shared/ui/Avatar';
import {CurrencySelect} from "entities/Currency";
import {CountrySelect} from "entities/Country";
import type {Country, Currency} from "shared/const";

interface Props {
    validateErrors?: ValidateProfileError[];
    profile?: Profile;
    isReadonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onFirstnameChange?: (value: string) => void;
    onLastNameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
    onCityChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
}

export const ProfileCard = memo(function ProfileCard(props: Props) {
    const {
        validateErrors,
        profile,
        isReadonly = true,
        isLoading,
        error,
        onFirstnameChange,
        onLastNameChange,
        onAgeChange,
        onCurrencyChange,
        onCountryChange,
        onCityChange,
        onUsernameChange,
        onAvatarChange
    } = props;

    const {t} = useTranslation('profile');

    const validateErrorsTranslates = useMemo(() => ({
        [ValidateProfileError.INCORRECT_PROFILE_DATA]: t("validateError.INCORRECT_PROFILE_DATA"),
        [ValidateProfileError.INCORRECT_FIRSTNAME]: t("validateError.INCORRECT_FIRSTNAME"),
        [ValidateProfileError.INCORRECT_LASTNAME]: t("validateError.INCORRECT_LASTNAME"),
        [ValidateProfileError.INCORRECT_AGE]: t("validateError.INCORRECT_AGE"),
        [ValidateProfileError.INCORRECT_CITY]: t("validateError.INCORRECT_CITY"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("validateError.INCORRECT_COUNTRY"),
        [ValidateProfileError.INCORRECT_CURRENCY]: t("validateError.INCORRECT_CURRENCY"),
        [ValidateProfileError.INCORRECT_USERNAME]: t("validateError.INCORRECT_USERNAME"),
        [ValidateProfileError.SERVER_ERROR]: t("validateError.SERVER_ERROR"),
    }), [t]);

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [styles.loadingWrapper])}>
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.ProfileCard}>
                <Text
                    variant={TextVariant.ERROR}
                    textAlign={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                >
                    {t('Попробуйте обновить страницу')}
                </Text>
            </div>
        );
    }

    return (
        <div className={classNames(styles.ProfileCard, {[styles.editing]: !isReadonly})}>
            {
                profile?.avatar && (
                    <div className={styles.avatar}>
                        <Avatar size={150} src={profile.avatar}/>
                    </div>
                )
            }

            <div className={styles.fields}>
                <Input
                    disabled={isReadonly}
                    placeholder={t("Имя пользователя")}
                    value={profile?.username}
                    onChange={onUsernameChange}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Имя")}
                    value={profile?.firstName}
                    onChange={onFirstnameChange}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Фамилия")}
                    value={profile?.lastName}
                    onChange={onLastNameChange}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Возраст")}
                    value={profile?.age}
                    onChange={onAgeChange}
                />
                <CountrySelect
                    disabled={isReadonly}
                    value={profile?.country}
                    onChange={onCountryChange}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Город")}
                    value={profile?.city}
                    onChange={onCityChange}
                />
                <CurrencySelect
                    disabled={isReadonly}
                    value={profile?.currency}
                    onChange={onCurrencyChange}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Аватар")}
                    value={profile?.avatar}
                    onChange={onAvatarChange}
                />
            </div>

            {
                validateErrors?.map(error => (
                    <Text key={error} variant={TextVariant.ERROR}>
                        {validateErrorsTranslates[error]}
                    </Text>
                ))
            }

        </div>
    );
});