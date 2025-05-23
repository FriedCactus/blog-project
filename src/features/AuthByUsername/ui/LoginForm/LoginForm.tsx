import styles from "./LoginForm.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input";
import {useState} from "react";

export const LoginForm = () => {
    const {t} = useTranslation();

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onUsernameChange = (value: string) => {
        setUsernameValue(value);
    };

    const onPasswordChange = (value: string) => {
        setPasswordValue(value);
    };

    return (
        <div className={classNames(styles.LoginForm)}>
            <Input
                name="username"
                placeholder={t("Введите логин")}
                value={usernameValue}
                onChange={onUsernameChange}
                autoFocus
            />

            <Input
                name="password"
                type="password"
                placeholder={t("Введите пароль")}
                value={passwordValue}
                onChange={onPasswordChange}
            />

            <Button>
                {t("Войти")}
            </Button>
        </div>
    );
};