import {Modal} from "shared/ui/Modal";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";
import {Suspense} from "react";
import {LoadingSpinner} from "shared/ui/LoadingSpinner";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
    onSuccess?: () => void;
}

export const LoginModal = (props: Props) => {
    const {
        isOpen,
        onClose,
        onSuccess
    } = props;

    const closeHandler = () => {
        onClose?.();
    };

    const successHandler = () => {
        onSuccess?.();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeHandler}
        >
            <Suspense fallback={<LoadingSpinner/>}>
                <LoginFormAsync onSuccess={successHandler}/>
            </Suspense>
        </Modal>
    );
};