import styles from "./LoginForm.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input";
import {FormEvent, memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {useAppDispatch} from "shared/lib/hooks";
import {Text, TextVariant} from 'shared/ui/Text';
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {DynamicModuleLoader, type ReducersList} from "shared/lib/components";

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(function LoginForm() {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) return;

        const userData = {
            username,
            password
        };
        dispatch(loginByUsername(userData));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form onSubmit={onSubmit} className={classNames(styles.LoginForm)}>
                <Text title={t("Форма авторизации")}/>

                <Input
                    name="username"
                    placeholder={t("Введите логин")}
                    value={username}
                    onChange={onUsernameChange}
                    autoFocus
                />
                <Input
                    name="password"
                    type="password"
                    placeholder={t("Введите пароль")}
                    value={password}
                    onChange={onPasswordChange}
                />
                {
                    error && <Text variant={TextVariant.ERROR}>{t('Неверный логин или пароль')}</Text>
                }

                <Button type="submit" disabled={isLoading}>
                    {t("Войти")}
                </Button>
            </form>
        </DynamicModuleLoader>

    );
});

export default LoginForm;