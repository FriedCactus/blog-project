import {Button} from "shared/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {memo, useCallback, useMemo, useState} from "react";
import {getUserAuthData, userActions} from "entities/User";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {RouterLink} from "shared/ui/RouterLink";
import {RouterLinkVariant} from "shared/ui/RouterLink/RouterLink";
import {AppPaths} from "shared/config/routes";
import {HeaderWrapper} from "./HeaderWrapper/HeaderWrapper";
import {Avatar} from "shared/ui/Avatar";
import {Dropdown, DropdownItem} from "shared/ui/Dropdown";


export const NavBar = memo(function NavBar() {
    const {t} = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onShowModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onSuccess = useCallback(() => {
        setIsModalOpen(false);
        dispatch(loginActions.clearState());
    }, [dispatch]);

    const onLogout = useCallback(() => {
        dispatch(userActions.clearAuthData());
    }, [dispatch]);

    const dropdownItems: DropdownItem[] = useMemo(() => (
        [

            {
                content: t('Мой профиль'),
                href: AppPaths.MY_PROFILE
            },
            {
                content: t('Выйти'),
                onClick: onLogout
            }
        ]
    ), [onLogout, t]);

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
                <Dropdown
                    trigger={<Avatar src={authData.avatar ?? ''} size={30}/>}
                    items={dropdownItems}
                />
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

