import styles from "./ProfileCard.module.css";
import {classNames} from "shared/lib/classNames";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileIsReadonly} from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import {useTranslation} from "react-i18next";
import {Text} from 'shared/ui/Text';
import {Button} from "shared/ui/Button";
import {Input} from "shared/ui/Input";

export const ProfileCard = () => {
    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const isReadonly = useSelector(getProfileIsReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfileCard)}>
            <Text title={t('Профиль')}/>

            <div>
                <Input
                    disabled={isReadonly}
                    placeholder={t("Ваше имя")}
                    value={profile?.firstName ?? ""}
                />
                <Input
                    disabled={isReadonly}
                    placeholder={t("Ваша фамилия")}
                    value={profile?.lastName ?? ""}
                />
            </div>

            <div>
                <Button disabled={isLoading || isReadonly}>
                    {t('Редактировать')}
                </Button>
            </div>
        </div>
    );
};