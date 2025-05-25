import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useState} from "react";
import {getUserAuthData, userActions} from "entities/User";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";

export const NavBar = () => {
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

    const onLogout = () => {
        dispatch(userActions.clearAuthData());
    };

    if (authData) {
        return (
            <div className={classNames(styles.Navbar)}>
                <Button onClick={onLogout}>{t('Выйти')}</Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.Navbar)}>
            <Button onClick={onShowModal}>{t('Войти')}</Button>
            {
                isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onCloseModal}/>
            }
        </div>
    );
};

