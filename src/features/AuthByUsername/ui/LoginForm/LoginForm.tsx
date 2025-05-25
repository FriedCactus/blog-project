import styles from "./LoginForm.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input";
import {FormEvent, memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Text, TextVariant} from 'shared/ui/Text';

export const LoginForm = memo(function LoginForm() {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const loginState = useSelector(getLoginState);
    const username = loginState?.username;
    const password = loginState?.password;

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
                loginState?.error && <Text variant={TextVariant.ERROR}>{t('Неверный логин или пароль')}</Text>
            }

            <Button type="submit" disabled={loginState?.isLoading}>
                {t("Войти")}
            </Button>
        </form>
    );
});