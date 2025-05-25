import {Modal} from "shared/ui/Modal";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";
import {Suspense} from "react";
import {LoadingSpinner} from "shared/ui/LoadingSpinner";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: Props) => {
    const {
        isOpen,
        onClose
    } = props;

    const closeHandler = () => {
        onClose?.();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeHandler}
            lazy
        >
            <Suspense fallback={<LoadingSpinner/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    );
};