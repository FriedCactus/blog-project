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
import styles from './EditableProfileCard.module.css';
import {Country, Currency} from "shared/const";

const reducers: ReducersList = {
    profile: profileReducer
};

export const EditableProfileCard = () => {
    const dispatch = useAppDispatch();
    const profile = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const isReadonly = useSelector(getProfileIsReadonly);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        dispatch(fetchProfileData());
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
            <div className={styles.EditableProfileCard}>
                <EditableProfileCardHeader/>
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
            </div>
        </DynamicModuleLoader>
    );
};