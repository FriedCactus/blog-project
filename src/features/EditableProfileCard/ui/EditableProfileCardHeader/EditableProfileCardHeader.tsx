import {memo} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks";
import {Text} from "shared/ui/Text";
import {Button, ButtonVariant} from "shared/ui/Button";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileIsReadonly} from "../../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import {HStack} from "shared/ui/Stack";

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
        <HStack justify="between">
            <Text title={t('Профиль')}/>
            <HStack gap="m">
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
            </HStack>
        </HStack>
    );
});