import {memo} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import styles from "./EditableProfileCardHeader.module.css";
import {useAppDispatch} from "shared/lib/hooks";
import {Text} from "shared/ui/Text";
import {Button, ButtonVariant} from "shared/ui/Button";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileIsReadonly} from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";

interface Props {
    profileId: string;
}

export const EditableProfileCardHeader = memo(function EditableProfileCardHeader({profileId}: Props) {
    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch();
    const isReadonly = useSelector(getProfileIsReadonly);
    const isLoading = useSelector(getProfileIsLoading);

    const onEdit = () => {
        dispatch(profileActions.setIsReadonly(false));
    };

    const onSave = () => {
        dispatch(updateProfileData(profileId));
    };

    const onUndoChanges = () => {
        dispatch(profileActions.undoChanges());
    };

    return (
        <div className={styles.EditableProfileCardHeader}>
            <Text title={t('Профиль')}/>
            <div className={styles.buttonsContainer}>
                {
                    isReadonly
                        ?
                        <Button
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                        :
                        <>
                            <Button
                                variant={ButtonVariant.OUTLINE}
                                disabled={isLoading}
                                onClick={onUndoChanges}
                            >
                                {t('Отменить')}
                            </Button>

                            <Button
                                disabled={isLoading}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                }
            </div>
        </div>
    );
});