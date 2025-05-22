import styles from "./NavBar.module.css";
import {classNames} from "shared/lib/classNames";
import {Button} from "shared/ui/Button";
import {Modal} from "shared/ui/Modal";
import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";

export const NavBar = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className={classNames(styles.Navbar)}>
            <Button onClick={() => setIsModalOpen(true)}>{t('Войти')}</Button>
            <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                {/* После создания окна удалить перевод */}
                {t('Модалка авторизации')}
            </Modal>
        </div>
    );
};

