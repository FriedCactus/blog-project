import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {memo, useState} from "react";
import {getUserAuthData, userActions} from "entities/User";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {AppPaths} from "shared/config/routes";
import {HeaderWrapper} from "./HeaderWrapper/HeaderWrapper";

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
            <HeaderWrapper>
                <RouterLink
                    to={AppPaths.CREATE_ARTICLE}
                    variant={RouterLinkVariant.SECONDARY}
                    withoutUnderline
                >
                    {t('Создать статью')}
                </RouterLink>
                <Button onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </HeaderWrapper>
        );
    }

    return (
        <HeaderWrapper>
            <Button onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {
                isModalOpen && <LoginModal
                    isOpen={isModalOpen}
                    onClose={onCloseModal}
                    onSuccess={onSuccess}
                />
            }
        </HeaderWrapper>
    );
});

