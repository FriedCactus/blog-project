import {ProfileCard} from "entities/Profile";
import {useAppDispatch, useInitialEffect} from "shared/lib/hooks";
import {fetchProfileData} from "../model/services/fetchProfileData/fetchProfileData";
import {getProfileFormData} from "../model/selectors/getProfileFormData/getProfileFormData";
import {getProfileIsLoading} from "../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileIsReadonly} from "../model/selectors/getProfileIsReadonly/getProfileIsReadonly";
import {getProfileValidateErrors} from "../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import {useCallback} from "react";
import {useSelector} from "react-redux";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components";
import {profileActions, profileReducer} from "../model/slice/profileSlice";
import {getProfileError} from "../model/selectors/getProfileError/getProfileError";
import {EditableProfileCardHeader} from "./EditableProfileCardHeader/EditableProfileCardHeader";
import {Country, Currency} from "shared/const";
import {VStack} from "shared/ui/Stack";

const reducers: ReducersList = {
    profile: profileReducer
};

interface Props {
    id?: string;
    editable?: boolean;
}

export const EditableProfileCard = (props: Props) => {
    const {
        id,
        editable = true
    } = props;

    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const isReadonly = useSelector(getProfileIsReadonly);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            firstName: value
        }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            lastName: value
        }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        const age = +value;

        dispatch(profileActions.updateProfile({
            age: isNaN(age) ? 0 : age
        }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({
            currency: value as Currency
        }));
    }, [dispatch]);

    const onCountryChange = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({
            country: value as Country
        }));
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value
        }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            username: value
        }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="xl">
                {
                    editable && id && <EditableProfileCardHeader profileId={id}/>
                }
                <ProfileCard
                    validateErrors={validateErrors}
                    profile={profile}
                    isLoading={isLoading}
                    isReadonly={isReadonly}
                    error={error}
                    onFirstnameChange={onFirstnameChange}
                    onLastNameChange={onLastNameChange}
                    onAgeChange={onAgeChange}
                    onCurrencyChange={onCurrencyChange}
                    onCountryChange={onCountryChange}
                    onCityChange={onCityChange}
                    onUsernameChange={onUsernameChange}
                    onAvatarChange={onAvatarChange}
                />
            </VStack>
        </DynamicModuleLoader>
    );
};