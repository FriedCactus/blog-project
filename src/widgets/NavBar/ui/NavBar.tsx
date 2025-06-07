import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {memo, useState} from "react";
import {getUserAuthData, userActions} from "entities/User";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";

export const NavBar = memo(function NavBar() {
    const {t} = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onShowModal = () => {
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    const onSuccess = () => {
        setIsModalOpen(false);
        dispatch(loginActions.clearState());
    };

    const onLogout = () => {
        dispatch(userActions.clearAuthData());
    };

    if (authData) {
        return (
            <header className={classNames(styles.Navbar)}>
                <Button onClick={onLogout}>{t('Выйти')}</Button>
            </header>
        );
    }

    return (
        <header className={classNames(styles.Navbar)}>
            <Button onClick={onShowModal}>{t('Войти')}</Button>
            {
                isModalOpen && <LoginModal
                    isOpen={isModalOpen}
                    onClose={onCloseModal}
                    onSuccess={onSuccess}
                />
            }
        </header>
    );
});

