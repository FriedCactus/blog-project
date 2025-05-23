import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useState} from "react";

export const NavBar = () => {
    const {t} = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onShowModal = () => {
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classNames(styles.Navbar)}>
            <Button onClick={onShowModal}>{t('Войти')}</Button>
            <LoginModal isOpen={isModalOpen} onClose={onCloseModal}/>
        </div>
    );
};

